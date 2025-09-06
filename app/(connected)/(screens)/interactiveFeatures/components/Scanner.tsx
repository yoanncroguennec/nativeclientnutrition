// src/screens/ScanScreen.tsx
import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import * as FileSystem from 'expo-file-system'

const CLARIFAI_API_KEY = 'YOUR_CLARIFAI_API_KEY'
const EDAMAM_APP_ID = 'YOUR_EDAMAM_APP_ID'
const EDAMAM_APP_KEY = 'YOUR_EDAMAM_API_KEY'

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions()
  const [photoUri, setPhotoUri] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any | null>(null)
  const cameraRef = useRef<CameraView>(null)

  const takePhoto = async () => {
    if (!cameraRef.current) return
    setLoading(true)

    try {
      const photo = await cameraRef.current.takePictureAsync({ base64: true })
      setPhotoUri(photo.uri)

      const foodName = await recognizeFood(photo.uri)
      const nutrition = await getNutrition(foodName)

      setResult({ foodName, ...nutrition })
    } catch (e) {
      console.error(e)
      setResult(null)
    }

    setLoading(false)
  }

  const recognizeFood = async (imageUri: string): Promise<string> => {
    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: 'base64',
    })

    const res = await fetch(
      'https://api.clarifai.com/v2/models/food-item-recognition/outputs',
      {
        method: 'POST',
        headers: {
          Authorization: `Key ${CLARIFAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: [{ data: { image: { base64 } } }],
        }),
      },
    )

    const data = await res.json()
    const name = data?.outputs?.[0]?.data?.concepts?.[0]?.name
    return name || 'Aliment inconnu'
  }

  const getNutrition = async (foodName: string) => {
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}&ingr=1%20${encodeURIComponent(
      foodName,
    )}`

    const res = await fetch(url)
    const data = await res.json()

    return {
      calories: data.calories,
      fat: data.totalNutrients?.FAT?.quantity?.toFixed(1),
      protein: data.totalNutrients?.PROCNT?.quantity?.toFixed(1),
      carbs: data.totalNutrients?.CHOCDF?.quantity?.toFixed(1),
    }
  }

  if (!permission?.granted) {
    return (
      <View style={styles.centered}>
        <Text>Permission caméra requise</Text>
        <Button title="Autoriser la caméra" onPress={requestPermission} />
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={cameraRef} style={{ flex: 1 }} facing="back" />
      <View style={styles.overlay}>
        <Button title="📷 Scanner l'aliment" onPress={takePhoto} />
      </View>

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {result && (
        <ScrollView contentContainerStyle={styles.result}>
          <Text style={styles.title}>
            🍎 Aliment reconnu : {result.foodName}
          </Text>
          <Text>🔥 Calories : {result.calories} kcal</Text>
          <Text>🥩 Protéines : {result.protein} g</Text>
          <Text>🧈 Lipides : {result.fat} g</Text>
          <Text>🍞 Glucides : {result.carbs} g</Text>
          {photoUri && (
            <Image source={{ uri: photoUri }} style={styles.image} />
          )}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#00000088',
    borderRadius: 10,
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
})

// import { CameraView, useCameraPermissions, CameraType } from 'expo-camera';
// import { useRef, useState } from 'react';
// import { View, Button, Text, StyleSheet, Image } from 'react-native';

// export const Scanner = ({ onImageCaptured }: { onImageCaptured: (uri: string) => void }) => {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [photoUri, setPhotoUri] = useState<string | null>(null);
//   const cameraRef = useRef<CameraView>(null);

//   const takePhoto = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync({ base64: true });
//       setPhotoUri(photo.uri);
//       onImageCaptured(photo.uri);
//     }
//   };

//   if (!permission?.granted) {
//     return (
//       <View style={styles.centered}>
//         <Text>Permission caméra requise</Text>
//         <Button title="Autoriser" onPress={requestPermission} />
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <CameraView
//         ref={cameraRef}
//         style={{ flex: 1 }}
//         facing="back" // OU: facing="back"
//       />
//       <View style={styles.overlay}>
//         <Button title="📷 Prendre une photo" onPress={takePhoto} />
//       </View>
//       {photoUri && <Image source={{ uri: photoUri }} style={styles.preview} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   overlay: {
//     position: "absolute",
//     bottom: 20,
//     alignSelf: "center",
//     backgroundColor: "#00000088",
//     borderRadius: 12,
//     padding: 10,
//   },
//   preview: {
//     width: 100,
//     height: 100,
//     position: "absolute",
//     bottom: 80,
//     right: 20,
//     borderWidth: 1,
//     borderColor: "#fff",
//   },
// });
