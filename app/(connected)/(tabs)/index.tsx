import data_BG_Imgs_launchPad_Screen from '@/app/components/layouts/launchPad_Screen/data_BG_Imgs_launchPad_Screen'
import dataListIcons_LaunchPad, {
  AppIcon,
} from '@/app/components/layouts/launchPad_Screen/dataListIcons_LaunchPad'
import stylesLaunchPad_Screen from '@/app/components/layouts/launchPad_Screen/StylesLaunchPad_Screen'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useRef, useState } from 'react'
import {
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Animated,
  Modal,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
// import Torch from 'expo-torch';

const NUM_COLUMNS = 3

const gradientColors = [
  ['#FF5F6D', '#FFC371'],
  ['#36D1DC', '#5B86E5'],
  ['#00C9FF', '#92FE9D'],
  ['#f7971e', '#ffd200'],
  ['#667eea', '#764ba2'],
]

export default function LaunchPad_Screen() {
  const [selectedGradient, setSelectedGradient] = useState<string[] | null>(
    null,
  )
  const [selectedBg, setSelectedBg] = useState<any>(null)
  const [modalVisibleBG_LaunchPad, setModalVisibleChangeBG_LaunchPad] =
    useState(false)
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current

  const openModalChangeBG_LaunchPad = () => {
    setModalVisibleChangeBG_LaunchPad(true)
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setModalVisibleChangeBG_LaunchPad(false)
    })
  }

  const handleGradientSelect = (colors: string[]) => {
    setSelectedGradient(colors)
    setSelectedBg(null)
    closeModal()
  }

  const handleBackgroundSelect = (image: any) => {
    setSelectedBg(image)
    setSelectedGradient(null)
    closeModal()
  }

  const [data, setData] = useState(dataListIcons_LaunchPad)

  const handlePress = (item: AppIcon) => {
    console.log(`App sélectionnée : ${item.name}`)
  }

  const {
    itemStyles,
    label,
    icon,
    header,
    launchPad,
    launchPadText,
    iconRow,
    headerIcon,
    modalBackdrop,
    modalContent,
    modalText,
    categoryTitle,
    selectableImage,
    container,
    grid,
  } = stylesLaunchPad_Screen

  const groupedBackgroundImages = data_BG_Imgs_launchPad_Screen.reduce(
    (acc, curr) => {
      if (!acc[curr.category]) acc[curr.category] = []
      acc[curr.category].push(curr) // garder l'objet complet, pas juste curr.icon
      return acc
    },
    {} as Record<string, typeof data_BG_Imgs_launchPad_Screen>,
  )

  const DraggableIcon = ({ item }: { item: AppIcon }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={itemStyles}>
        <Image source={item.icon} style={icon} />
        <Text style={label}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  const Header = () => (
    <View style={header}>
      <View style={{ flex: 1 }} />
      <View style={launchPad}>
        <Text style={launchPadText}>LaunchPad</Text>
      </View>
      <View style={iconRow}>
        <TouchableOpacity onPress={openModalChangeBG_LaunchPad}>
          <Image
            source={require('@/assets/icons/global_forHomeScreen/icon_changBG_Img_1.png')}
            style={headerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/icons/global_forHomeScreen/icon_params_1.png')}
            style={headerIcon}
          />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={modalVisibleBG_LaunchPad}
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={modalBackdrop}>
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={closeModal}
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Animated.View
                style={[
                  modalContent,
                  { transform: [{ translateY: slideAnim }] },
                ]}
              >
                <Text style={modalText}>Choisissez un fond d'écran</Text>
                <Text style={categoryTitle}>DÉGRADÉS</Text>
                <FlatList
                  data={gradientColors}
                  keyExtractor={(_, index) => `gradient-${index}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleGradientSelect(item)}
                      style={{ marginRight: 10 }}
                    >
                      <LinearGradient
                        colors={item}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 10,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                />
                <FlatList
                  data={Object.keys(groupedBackgroundImages)}
                  keyExtractor={item => item}
                  renderItem={({ item: category }) => (
                    <View style={{ marginBottom: 20 }}>
                      <Text style={categoryTitle}>
                        {category.toUpperCase()}
                      </Text>
                      <FlatList
                        data={groupedBackgroundImages[category]}
                        keyExtractor={(_, index) => `${category}-${index}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            onPress={() => handleBackgroundSelect(item.icon)}
                          >
                            <View
                              style={{ position: 'relative', marginRight: 10 }}
                            >
                              <Image
                                source={item.icon}
                                style={selectableImage}
                              />
                              {item.paid && (
                                <FontAwesome5
                                  name="crown"
                                  size={18}
                                  color="#FFD700"
                                  style={{
                                    position: 'absolute',
                                    top: 5,
                                    right: 5,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    borderRadius: 10,
                                    padding: 2,
                                  }}
                                />
                              )}
                            </View>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  )}
                />
                <TouchableOpacity onPress={closeModal}>
                  <Text
                    style={{
                      color: 'blue',
                      textAlign: 'center',
                      marginTop: 10,
                    }}
                  >
                    Annuler
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )

  const Content = () => (
    <>
      <Header />
      <FlatList
        data={data}
        renderItem={({ item }) => <DraggableIcon item={item} />}
        keyExtractor={item => item.key}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={grid}
      />
    </>
  )

  if (selectedGradient) {
    return (
      <LinearGradient colors={selectedGradient} style={{ flex: 1 }}>
        <Content />
      </LinearGradient>
    )
  }

  return (
    <ImageBackground
      source={
        selectedBg ||
        require('@/assets/imgs/bg/launchPad/landscape/imgBG_landscape_3.jpg')
      }
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Content />
    </ImageBackground>
  )
}



// // import React, { useEffect, useState } from 'react';
// // import {
// //   View,
// //   StyleSheet,
// //   Dimensions,
// //   Pressable,
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import DraggableFlatList, {
// //   ScaleDecorator,
// // } from 'react-native-draggable-flatlist';
// // import { MaterialIcons } from '@expo/vector-icons';
// // import { GestureHandlerRootView } from 'react-native-gesture-handler';

// // const STORAGE_KEY = 'DRAGGABLE_ICON_ORDER';

// // type IconItem = {
// //   key: string;
// //   name: keyof typeof MaterialIcons.glyphMap;
// //   color: string;
// // };

// // const initialIcons: IconItem[] = [
// //   { key: '1', name: 'home', color: '#3498db' },
// //   { key: '2', name: 'settings', color: '#9b59b6' },
// //   { key: '3', name: 'favorite', color: '#e74c3c' },
// //   { key: '4', name: 'info', color: '#1abc9c' },
// //   { key: '5', name: 'alarm', color: '#f1c40f' },
// //   { key: '6', name: 'camera', color: '#2ecc71' },
// //   { key: '7', name: 'email', color: '#e67e22' },
// //   { key: '8', name: 'map', color: '#34495e' },
// //   { key: '9', name: 'phone', color: '#d35400' },
// // ];

// // export default function DraggableIconsScreen() {
// //   const [data, setData] = useState<IconItem[]>([]);
// //   const [pressedKey, setPressedKey] = useState<string | null>(null);

// //   useEffect(() => {
// //     const loadData = async () => {
// //       const stored = await AsyncStorage.getItem(STORAGE_KEY);
// //       if (stored) {
// //         try {
// //           const parsed = JSON.parse(stored);
// //           setData(parsed);
// //         } catch {
// //           setData(initialIcons);
// //         }
// //       } else {
// //         setData(initialIcons);
// //       }
// //     };
// //     loadData();
// //   }, []);

// //   const saveData = async (newData: IconItem[]) => {
// //     setData(newData);
// //     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
// //   };

// //   const handlePress = (key: string) => {
// //     setPressedKey(key);
// //     setTimeout(() => setPressedKey(null), 300);
// //   };

// //   const renderItem = ({ item, drag, isActive }: any) => {
// //     const isPressed = pressedKey === item.key;

// //     return (
// //       <ScaleDecorator>
// //         <Pressable
// //           onLongPress={drag}
// //           onPress={() => handlePress(item.key)}
// //           style={[
// //             styles.iconContainer,
// //             isPressed && styles.pressedIconContainer,
// //             isActive && styles.activeDragStyle,
// //           ]}
// //         >
// //           <MaterialIcons
// //             name={item.name}
// //             size={40}
// //             color={item.color}
// //           />
// //         </Pressable>
// //       </ScaleDecorator>
// //     );
// //   };

// //   return (
// //    <GestureHandlerRootView>

// //      <View style={styles.container}>
// //       <DraggableFlatList
// //         data={data}
// //         onDragEnd={({ data }) => saveData(data)}
// //         keyExtractor={(item) => item.key}
// //         renderItem={renderItem}
// //         numColumns={3}
// //         activationDistance={10}
// //       />
// //     </View>
// //    </GestureHandlerRootView>
// //   );
// // }

// // const { width } = Dimensions.get('window');
// // const iconSize = width / 3;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingTop: 50,
// //     backgroundColor: '#fff',
// //   },
// //   iconContainer: {
// //     width: iconSize,
// //     height: iconSize,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   pressedIconContainer: {
// //     backgroundColor: '#d3d3d3',
// //     borderRadius: 50,
// //     width: 100,
// //     height: 100,
// //   },
// //   activeDragStyle: {
// //     transform: [{ scale: 1.2 }],
// //     opacity: 0.7,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.3,
// //     shadowRadius: 10,
// //     shadowOffset: { width: 0, height: 4 },
// //     elevation: 5, // Android
// //   },
// // });

// // import React from 'react'
// // import ListAllRecipes from '../(screens)/cooking/recipes'

// // export default function index() {
// //   return <ListAllRecipes />
// // }
