import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Share,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Checkbox from 'expo-checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage'
// TYPES
// import TodoType from "@/app/utils/constants/types/TodoType";
// CONSTANTS
import { STORAGE_KEY } from '@/app/utils/constants/storage/Constantes'
// ICONS
import { Ionicons } from '@expo/vector-icons'

type TodoType = {
  id: number
  title: string
  isDone: boolean
}

export default function TodoListScreen() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [todoText, setTodoText] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<'all' | 'done' | 'notDone'>('all')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [sort, setSort] = useState<
    'dateAsc' | 'dateDesc' | 'titleAsc' | 'titleDesc'
  >('dateDesc')

  const [showFilter, setShowFilter] = useState<boolean>(false)

  useEffect(() => {
    async function getTodos() {
      try {
        const storedTodos = await AsyncStorage.getItem(STORAGE_KEY)
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos))
        }
      } catch (error) {
        console.log(error)
      }
    }

    getTodos()
  }, [])

  async function saveTodos(updatedTodos: TodoType[]) {
    setTodos(updatedTodos)
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos))
  }

  async function addOrEditTodo() {
    if (!todoText.trim()) return

    if (editingId !== null) {
      const updatedTodos = todos.map(todo =>
        todo.id === editingId ? { ...todo, title: todoText.trim() } : todo,
      )
      await saveTodos(updatedTodos)
      setEditingId(null)
    } else {
      const newTodo: TodoType = {
        id: Date.now(),
        title: todoText.trim(),
        isDone: false,
      }
      await saveTodos([...todos, newTodo])
    }

    setTodoText('')
    Keyboard.dismiss()
  }

  async function deleteTodo(id: number) {
    const newTodos = todos.filter(todo => todo.id !== id)
    await saveTodos(newTodos)
  }

  async function toggleTodo(id: number) {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    )
    await saveTodos(updatedTodos)
  }

  function editTodo(todo: TodoType) {
    setTodoText(todo.title)
    setEditingId(todo.id)
  }

  function sortTodos(list: TodoType[]) {
    const sorted = [...list]
    switch (sort) {
      case 'dateAsc':
        return sorted.sort((a, b) => a.id - b.id)
      case 'dateDesc':
        return sorted.sort((a, b) => b.id - a.id)
      case 'titleAsc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title))
      case 'titleDesc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title))
      default:
        return sorted
    }
  }

  const filteredTodos = sortTodos(
    todos
      .filter(todo => {
        if (filter === 'done') return todo.isDone
        if (filter === 'notDone') return !todo.isDone
        return true
      })
      .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())),
  )

  async function exportTodos() {
    const text = todos
      .map(todo => `${todo.isDone ? '✅' : '❌'} ${todo.title}`)
      .join('\n')

    try {
      await Share.share({
        message: text,
        title: 'Ma liste de tâches',
      })
    } catch (error) {
      console.log('Erreur export:', error)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Courses de listes</Text>
      </View>

      {/* Recherche */}
      <View style={styles.searchContainer}>
        <Ionicons color="#000" name="search" size={24} />
        <TextInput
          placeholder="Rechercher une tâche..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
        {showFilter ? (
          <>
            {/* Filtres */}
            <View style={styles.filterContainer}>
              <TouchableOpacity
                style={[
                  styles.filterBtn,
                  filter === 'all' && styles.activeFilter,
                ]}
                onPress={() => setFilter('all')}
              >
                <Text style={styles.filterText}>Toutes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterBtn,
                  filter === 'done' && styles.activeFilter,
                ]}
                onPress={() => setFilter('done')}
              >
                <Text style={styles.filterText}>Terminées</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterBtn,
                  filter === 'notDone' && styles.activeFilter,
                ]}
                onPress={() => setFilter('notDone')}
              >
                <Text style={styles.filterText}>Non terminées</Text>
              </TouchableOpacity>
            </View>

            {/* Tri */}
            <View style={styles.sortContainer}>
              <Text style={{ fontWeight: 'bold' }}>Tri :</Text>
              {[
                ['dateDesc', 'Date ↓'],
                ['dateAsc', 'Date ↑'],
                ['titleAsc', 'Titre A→Z'],
                ['titleDesc', 'Titre Z→A'],
              ].map(([value, label]) => (
                <TouchableOpacity
                  key={value}
                  onPress={() => setSort(value as any)}
                  style={[styles.sortBtn, sort === value && styles.activeSort]}
                >
                  <Text style={styles.sortText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <TouchableOpacity onPress={() => setShowFilter(true)}>
            <Ionicons color="#000" name="filter" size={24} />
          </TouchableOpacity>
        )}
      </View>

      {/* Liste */}
      <FlatList
        data={filteredTodos}
        keyExtractor={todo => todo.id.toString()}
        renderItem={({ item: todo }) => (
          <View style={styles.todoContainer}>
            <View style={styles.todoInfoContainer}>
              <Checkbox
                value={todo.isDone}
                onValueChange={() => toggleTodo(todo.id)}
                color={todo.isDone ? '#4630EB' : undefined}
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
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => editTodo(todo)}
                style={{ marginRight: 8 }}
              >
                <Ionicons color="green" name="create-outline" size={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <Ionicons color="#F00" name="trash" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Ajouter / Modifier */}
      <KeyboardAvoidingView behavior="padding" style={styles.footer}>
        <TextInput
          autoCorrect={false}
          placeholder="Ajouter ou modifier une tâche..."
          style={styles.newTodoInput}
          value={todoText}
          onChangeText={setTodoText}
        />
        <TouchableOpacity onPress={addOrEditTodo} style={styles.addBtn}>
          <Ionicons
            name={editingId ? 'checkmark' : 'add'}
            size={24}
            color="#FFF"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={exportTodos} style={styles.exportBtn}>
          <Ionicons name="share-social" size={24} color="#FFF" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#DDD',
  },
  activeFilter: {
    backgroundColor: '#4630EB',
  },
  filterText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  sortContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sortBtn: {
    backgroundColor: '#DDD',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
  },
  activeSort: {
    backgroundColor: '#4630EB',
  },
  sortText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  todoContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    padding: 16,
    elevation: 2,
  },
  todoInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    flexShrink: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderColor: '#DDD',
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
    marginLeft: 12,
    padding: 12,
  },
  exportBtn: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    marginLeft: 8,
    padding: 12,
  },
})
