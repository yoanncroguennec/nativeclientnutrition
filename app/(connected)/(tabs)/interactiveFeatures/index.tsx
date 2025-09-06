import { useRef, useState } from 'react'
import {
  View,
  Text,
  Modal,
  Alert,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { Button, Card } from 'react-native-paper'
import axios from 'axios'
import stylesBarCode_FoodAnalysis from '../../(screens)/interactiveFeatures/barCode_FoodAnalysis/StylesBarCode_FoodAnalysis'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function BarCode_FoodAnalysis() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [permission, requestPermission] = useCameraPermissions()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const qrCodeLock = useRef(false)

  async function handleOpenCamera() {
    const { granted } = await requestPermission()
    if (!granted) {
      return Alert.alert('Camera', "Autorisez l'utilisation de la caméra")
    }
    setModalIsVisible(true)
    qrCodeLock.current = false
  }

  async function handleQRCodeRead(data: string) {
    if (!data.match(/^\d+$/)) {
      alert('Code QR invalide')
      return
    }
    setModalIsVisible(false)
    setLoading(true)
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${data}.json`,
      )
      setLoading(false)
      if (response.data.status === 1) {
        console.log(response.data.product)

        setProduct(response.data.product)
      } else {
        Alert.alert('Erreur', 'Produit non trouvé')
        setProduct(null)
      }
    } catch (error) {
      setLoading(false)
      Alert.alert('Erreur', 'Impossible de récupérer le produit')
    }
  }

  function calculateScore(product: any): number {
    let score = 100
    if (product.nutriscore_grade === 'a') score += 0
    if (product.nutriscore_grade === 'e') score -= 50
    if (product.additives_tags?.length)
      score -= product.additives_tags.length * 10
    return Math.max(0, Math.min(100, score))
  }

  const score = product ? calculateScore(product) : 0
  const scoreColor = score >= 75 ? 'green' : score >= 50 ? 'orange' : 'red'

  // Styles
  const { container, card, label, styles_Score, modalFooter } =
    stylesBarCode_FoodAnalysis

  return (
    <ScrollView contentContainerStyle={container} scrollEnabled={false}>
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('window').width,
          justifyContent: 'flex-end', // boutons alignés à gauche
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() =>
            router.push('/(connected)/(screens)/interactiveFeatures')
          }
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: '#000' }}>SCAN</Text>
        </TouchableOpacity>
        <LinearGradient
          colors={['#DF64C4', '#4F28B2']}
          style={{
            alignItems: 'center',
            borderRadius: 25,
            justifyContent: 'center',
            margin: 2,
            padding: 5,
            width: 120,
          }}
        >
          <TouchableOpacity
            onPress={() => handleOpenCamera()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons color="#FFF" name="barcode-sharp" size={24} />
            <Text style={{ color: '#FFF' }}>Scanner</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#DF64C4', '#4F28B2']}
          style={{
            alignItems: 'center',
            borderRadius: 25,
            justifyContent: 'center',
            margin: 2,
            padding: 5,
            width: 100,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              router.push(
                '/(connected)/(tabs)/interactiveFeatures/historyScreen/HistoryScreen',
              )
            }
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesome color="#FFF" name="history" size={24} />
            <Text style={{ color: '#FFF' }}>Historique</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {!loading && product && (
        <Card style={card}>
          <Card.Title title={product.product_name ?? 'Produit inconnu'} />
          <Card.Cover
            source={{ uri: product.image_front_url }}
            style={{ marginBottom: 10 }}
          />
          <Card.Content>
            <Text style={label}>Marque : {product.brands}</Text>
            <Text style={label}>Pays : {product.countries}</Text>
            <Text style={label}>Ingrédients : {product.ingredients_text}</Text>
            <Text style={label}>Additifs : {product.additives_n ?? 'N/A'}</Text>
            <Text style={[styles_Score, { color: scoreColor }]}>
              Score nutritionnel : {score}/100
            </Text>
            <Text style={label}>
              Nutriscore : {product.nutrition_grades_tags?.[0] ?? 'N/A'}
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => setProduct(null)}>Scanner un autre</Button>
          </Card.Actions>
        </Card>
      )}

      {!loading && !product && (
        <Text style={{ marginTop: 20 }}>
          Aucun produit scanné pour l’instant
        </Text>
      )}

      <Modal visible={modalIsVisible}>
        <CameraView
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrCodeLock.current) {
              qrCodeLock.current = true
              setTimeout(() => handleQRCodeRead(data), 300)
            }
          }}
          style={{ flex: 1 }}
        />
        <View
          style={{
            backgroundColor: 'transparent',
            borderColor: '#FFF',
            borderWidth: 2,
            top: '50%',
            left: '50%',
            transform: [{ translateX: -125 }, { translateY: -25 }], // Ajuste -125 (moitié de la largeur) et -25 (moitié de la hauteur approximative)
            paddingVertical: 50,
            position: 'absolute',
            width: 250,
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Scannez ici
          </Text>
        </View>
        <View style={modalFooter}>
          <Button mode="outlined" onPress={() => setModalIsVisible(false)}>
            Annuler
          </Button>
        </View>
      </Modal>
    </ScrollView>
  )
}
