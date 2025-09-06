import Checkbox from 'expo-checkbox'
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  Modal as RNModal,
  ModalProps,
  Platform,
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Animated,
  Alert,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
// ICONS
import { Ionicons } from '@expo/vector-icons'

type PROPS = ModalProps & {
  isOpen: boolean
  withInput?: boolean
}

type TodoType = {
  id: number
  title: string
  category: string
  isDone: boolean
  date: string
}

export default function ShoppingListScreen() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [todoText, setTodoText] = useState<string>('')
  const [todoCategory, setTodoCategory] = useState<string>('')
  const [searchQuery, setsearchQuery] = useState<string>('')
  const [oldTodos, setOldTodos] = useState<TodoType[]>([])

  //
  const [isFeedBackOpen, setIsFeedBackOpen] = useState<boolean>(false)
  const [isDeleteOpen, setisDeleteOpen] = useState<boolean>(false)

  //
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [selectedFilter, setSelectedFilter] = useState<string>('toutes')
  const [selectedSort, setSelectedSort] = useState<string>('dateDesc')

  const selectedBgColor = '#F0F' // violet clair
  const selectedTextColor = '#FFF' // blanc

  // /
  const [modalVisible, setModalVisible] = useState(false)
  const [modalAddProduct, setModalAddProduct] = useState<boolean>(false)
  const [modalDeleteAllProduct, setModalDeleteAllProduct] =
    useState<boolean>(false)
  const [modalDeleteProduct, setModalDeleteProduct] = useState<boolean>(false)

  useEffect(() => {
    async function getTodos() {
      try {
        const todos = await AsyncStorage.getItem('my-todo')
        if (todos !== null) {
          setTodos(JSON.parse(todos))
          setOldTodos(JSON.parse(todos))
        }
      } catch (error) {
        console.log(error)
      }
    }

    getTodos()
  }, [])

  async function addTodo() {
    try {
      const newTodo = {
        id: Math.random(),
        title: todoText,
        category: todoCategory,
        isDone: false,
        date: new Date().toISOString(),
      }

      todos.push(newTodo)
      setTodos(todos)
      await AsyncStorage.setItem('my-todo', JSON.stringify(todos))
      setTodoText('')
      setTodoCategory('')
      Keyboard.dismiss()
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteTodo(id: number) {
    try {
      const newTodo = todos.filter(todo => todo.id !== id)
      await AsyncStorage.setItem('my-todo', JSON.stringify(newTodo))
      setTodos(newTodo)
      setOldTodos(newTodo)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleTodo(id: number) {
    try {
      const newTodo = todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone
        }
        return todo
      })

      await AsyncStorage.setItem('my-todo', JSON.stringify(todos))
      setTodos(newTodo)
    } catch (error) {
      console.log(error)
    }
  }

  function onSearch(query: string) {
    if (query == '') {
      setTodos(oldTodos)
    } else {
      const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(query.toLowerCase()),
      )

      setTodos(filteredTodos)
    }
  }

  useEffect(() => {
    onSearch(searchQuery)
  }, [searchQuery])

  async function deleteAllTodos() {
    await AsyncStorage.setItem('my-todo', JSON.stringify([]))
    setOldTodos([])
    setTodos([])
    setModalDeleteAllProduct(false)
  }

  ///

  const sortTodos = (list: TodoType[], sortType: string) => {
    let sorted = [...list]

    switch (sortType) {
      case 'dateAsc':
        sorted.sort((a, b) => a.id - b.id)
        break
      case 'dateDesc':
        sorted.sort((a, b) => b.id - a.id)
        break
      case 'titleAsc':
        sorted.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'titleDesc':
        sorted.sort((a, b) => b.title.localeCompare(a.title))
        break
    }

    setTodos(sorted)
  }

  // Sauvegarder la sélection filtre
  const onSelectFilter = async (value: string) => {
    setSelectedFilter(value)
    let filtered = [...oldTodos]

    if (value === 'terminees') {
      filtered = filtered.filter(todo => todo.isDone)
    } else if (value === 'nonTerminees') {
      filtered = filtered.filter(todo => !todo.isDone)
    }

    // Appliquer le tri également après le filtre
    sortTodos(filtered, selectedSort)
  }

  // Sauvegarder la sélection tri
  const onSelectSort = async (value: string) => {
    setSelectedSort(value)
    sortTodos([...todos], value)
  }

  // Reset : remet valeurs par défaut et supprime du stockage
  const onReset = async () => {
    setSelectedFilter('toutes')
    setSelectedSort('dateDesc')
    setTodos(oldTodos)
  }

  ////
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {
      label: 'Travail',
      value: 'travail',
      icon: () => <Image source={require('./repas.png')} style={styles.icon} />,
    },
    {
      label: 'Maison',
      value: 'maison',
      icon: () => <Image source={require('./repas.png')} style={styles.icon} />,
    },
    {
      label: 'Sport',
      value: 'sport',
      icon: () => <Image source={require('./repas.png')} style={styles.icon} />,
    },
  ])

  // Fonction pour custom render de la valeur sélectionnée
  const renderCustomValue = () => {
    if (!value) {
      return <Text style={styles.placeholder}>Choisir une catégorie</Text>
    }
    const selectedItem = items.find(item => item.value === value)
    return (
      <View style={styles.selectedItemContainer}>
        {selectedItem?.icon()}
        <Text style={styles.selectedItemLabel}>{selectedItem?.label}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
        <Ionicons color="#F00" name="filter" size={24} />
      </TouchableOpacity>

      {/* Wrapper pour fermer filtre/tris si clic en dehors */}
      {showFilter && (
        <>
          <TouchableWithoutFeedback onPress={() => setShowFilter(false)}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 999,
              }}
            />
          </TouchableWithoutFeedback>
          <View
            style={{
              position: 'absolute',
              top: 60,
              right: 10,
              backgroundColor: '#EEE',
              borderRadius: 25,
              borderWidth: 1,
              borderColor: '#CCC',
              padding: 10,
              zIndex: 1000, // Plus élevé que tous les autres éléments
              width: 200,
            }}
          >
            <Text
              style={{
                color: '#333',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 5,
                textAlign: 'center',
              }}
            >
              Filtres :
            </Text>

            {[
              ['toutes', 'Toutes'],
              ['terminees', 'Terminées'],
              ['nonTerminees', 'Non terminées'],
            ].map(([value, label]) => (
              <TouchableOpacity
                key={value}
                onPress={() => onSelectFilter(value)}
                style={{
                  backgroundColor:
                    selectedFilter === value ? selectedBgColor : '#DDD',
                  borderRadius: 20,
                  marginVertical: 5,
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    color:
                      selectedFilter === value ? selectedTextColor : '#000',
                    fontSize: 16,
                    textAlign: 'center',
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}

            <View
              style={{
                alignSelf: 'center',
                backgroundColor: 'red',
                height: 2,
                marginVertical: 10,
                width: '80%',
              }}
            />

            <Text
              style={{
                color: '#333',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 5,
                textAlign: 'center',
              }}
            >
              Triez par :
            </Text>

            {[
              ['dateDesc', 'Date ↓'],
              ['dateAsc', 'Date ↑'],
              ['titleAsc', 'Titre A→Z'],
              ['titleDesc', 'Titre Z→A'],
            ].map(([value, label]) => (
              <TouchableOpacity
                key={value}
                onPress={() => onSelectSort(value)}
                style={{
                  backgroundColor:
                    selectedSort === value ? selectedBgColor : '#DDD',
                  borderRadius: 20,
                  marginVertical: 5,
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                }}
              >
                <Text
                  style={{
                    color: selectedSort === value ? selectedTextColor : '#000',
                    fontSize: 16,
                    textAlign: 'center',
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Bouton Reset */}
            <TouchableOpacity
              onPress={onReset}
              style={{
                marginTop: 15,
                backgroundColor: '#F00',
                borderRadius: 20,
                paddingVertical: 10,
                paddingHorizontal: 15,
                alignSelf: 'center',
              }}
            >
              <Text
                style={{
                  color: '#FFF',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textAlign: 'center',
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('screen').width,
          justifyContent: 'flex-end', // boutons alignés à gauche
          alignItems: 'center',
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setModalAddProduct(true)}
          style={styles.addBtn}
        >
          <Ionicons color="#FFF" name={'add'} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalDeleteAllProduct(true)}
          style={styles.addBtn}
        >
          <Ionicons color="#F00" name={'trash'} size={24} />
        </TouchableOpacity>
      </View>

      {/* Modal Add Product */}
      <CenteredModal
        visible={modalAddProduct}
        onClose={() => setModalAddProduct(false)}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            alignItems: 'center',
            height: 250,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#F0F',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Ajouter un nouveau produit{' '}
          </Text>
          <View style={{ flexDirection: 'column', paddingVertical: 20 }}>
            <TextInput
              autoCorrect={false}
              blurOnSubmit={false} // Pour éviter que le clavier se ferme après "Entrée"
              multiline
              placeholder="Ajouter ou modifier une tâche..."
              returnKeyType="default" // Montre "Retour" au lieu de "Valider"
              style={styles.newTodoInput}
              value={todoText}
              onChangeText={text => setTodoText(text)}
            />
            {/* <View style={styles.container}> */}
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Choisir une catégorie"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              listItemLabelStyle={styles.label}
              // On masque le label par défaut
              showTickIcon={false}
              // On remplace l’affichage de la valeur par notre composant custom
              customArrowDown={() => null} // Optionnel : cache la flèche pour un look personnalisé
              customArrowUp={() => null} // Optionnel
              renderCustomizedButtonChild={renderCustomValue}
            />
            {/* </View> */}

            <TouchableOpacity
              onPress={() => {
                if (todoText.trim() === '') {
                  Alert.alert(
                    'Champ vide',
                    "Veuillez entrer une tâche avant de l'ajouter.",
                  )
                  return
                }
                addTodo()
                setModalAddProduct(false)
              }}
              style={[
                styles.addBtn,
                { opacity: todoText.trim() === '' ? 0.5 : 1 },
              ]}
              disabled={todoText.trim() === ''}
            >
              <Ionicons name={'add'} size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </CenteredModal>
      {/* Modal Delete All Products */}
      <CenteredModal
        visible={modalDeleteAllProduct}
        onClose={() => setModalVisible(false)}
      >
        <Text
          style={{
            color: '#F00',
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 10,
            textAlign: 'center',
          }}
        >
          Attention ! Vous êtes sur le point de supprimer la liste entière
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity
            style={{
              borderColor: 'green',
              borderRadius: 20,
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() => deleteAllTodos()}
          >
            <Text
              style={{
                color: 'green',
                fontSize: 17,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Oui
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#F00',
              borderRadius: 20,
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() => setModalDeleteAllProduct(false)}
          >
            <Text
              style={{
                color: '#F00',
                fontSize: 17,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Oui
            </Text>
          </TouchableOpacity>
        </View>
      </CenteredModal>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            alert('MENU')
          }}
        >
          <Ionicons color="#333" name="menu" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={{
              uri: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-1/474999021_10232299569024723_6578590640714604392_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=iHE5_908qPAQ7kNvwGbemoq&_nc_oc=Adlemby8m7HbY6MnbsIf3vUnF3gHRIFiTbwGUgpU-JBDsR32iDyYUlWX2t2tOu9VIr2JFxeIOAnvcvXT0X9SxD0n&_nc_zt=24&_nc_ht=scontent-cdg4-2.xx&_nc_gid=B1pE6lnpmLT7fGgpEdgySA&oh=00_AfP12LA-GP0s1V-7BJiIjZBGc0zPSHSjNozPGibJbROIGQ&oe=6846C9BA',
            }}
            style={{ borderRadius: 100, height: 50, width: 50 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons color="#333" name="search" size={25} />
        <TextInput
          clearButtonMode="always"
          onChangeText={text => setsearchQuery(text)}
          placeholder="Cherchez"
          style={styles.searchInput}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={[...todos].reverse()}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            deleteTodo={deleteTodo}
            handleTodo={handleTodo}
            modalDeleteProduct={modalDeleteProduct}
            setModalDeleteProduct={setModalDeleteProduct}
          />
        )}
      />
    </SafeAreaView>
  )
}

interface CenteredModalProps {
  visible: boolean
  onClose: () => void
  children?: React.ReactNode
}

const CenteredModal: React.FC<CenteredModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  const opacity = useRef(new Animated.Value(0)).current
  const translateY = useRef(new Animated.Value(50)).current

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 50,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [visible])

  return (
    <RNModal
      animationType="none"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <Animated.View
          style={[
            styles.modalContainer,
            {
              opacity,
              transform: [{ translateY }],
            },
          ]}
        >
          {children || (
            <Text style={styles.defaultText}>Ceci est un modal</Text>
          )}
        </Animated.View>
      </View>
    </RNModal>
  )
}

function TodoItem({
  todo,
  deleteTodo,
  handleTodo,
  modalDeleteProduct,
  setModalDeleteProduct,
}: {
  todo: TodoType
  deleteTodo: (id: number) => void
  handleTodo: (id: number) => void
  modalDeleteProduct: boolean
  setModalDeleteProduct: Dispatch<SetStateAction<boolean>>
}) {
  function formatDate(isoString: string) {
    const date = new Date(isoString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `créé le ${day}/${month}/${year} à ${hours}:${minutes}`
  }

  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoInfoContainer}>
        <Checkbox
          color={todo.isDone ? '#4630EB' : 'red'}
          onValueChange={() => handleTodo(todo.id)}
          value={todo.isDone}
        />
        <Text
          style={[
            styles.todoText,
            todo.isDone && {
              textDecorationLine: 'line-through',
              color: '#888',
            },
          ]}
        >
          {todo.title}
        </Text>
        <Text
          style={[
            styles.todoText,
            todo.isDone && {
              textDecorationLine: 'line-through',
              color: '#888',
            },
          ]}
        >
          l{todo.category}h
        </Text>
        <Text
          style={[
            styles.todoText,
            todo.isDone && {
              textDecorationLine: 'line-through',
              color: '#888',
            },
          ]}
        >
          {formatDate(todo.date)}
        </Text>
      </View>
      {/* Modal Delete Product */}
      <TouchableOpacity onPress={() => setModalDeleteProduct(true)}>
        <Ionicons color="#F00" name="trash" size={24} />
      </TouchableOpacity>
      <CenteredModal
        visible={modalDeleteProduct}
        onClose={() => setModalDeleteProduct(false)}
      >
        <Text
          style={{
            color: '#F00',
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 10,
            textAlign: 'center',
          }}
        >
          « Êtes-vous sûr de supprimer ce produit ? »
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity
            style={{
              borderColor: 'green',
              borderRadius: 20,
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() => deleteTodo(todo.id)}
          >
            <Text
              style={{
                color: 'green',
                fontSize: 17,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Oui
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#F00',
              borderRadius: 20,
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() => setModalDeleteProduct(false)}
          >
            <Text
              style={{
                color: '#F00',
                fontSize: 17,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Non
            </Text>
          </TouchableOpacity>
        </View>
      </CenteredModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    padding: 16,
  },
  searchInput: {
    color: '#333',
    flex: 1,
    fontSize: 16,
  },
  todoContainer: {
    // alignItems: "center",
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 16,
    // elevation: 2,
  },
  todoInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    // flex: 1,
  },
  todoText: {
    fontSize: 16,
    flexShrink: 1,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newTodoInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    flex: 1,
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: '#4630EB',
    borderRadius: 10,
    height: 50,
    marginLeft: 20,
    padding: 12,
    width: 50,
  },
  ///////////
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'column',
    minWidth: '80%',
    elevation: 5,
    maxWidth: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 16,
  },
  ////
  container: {
    marginTop: 60,
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  dropdown: {
    borderColor: '#ccc',
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
  selectedItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedItemLabel: {
    fontSize: 16,
  },
  placeholder: {
    color: '#999',
    fontSize: 16,
  },
})
