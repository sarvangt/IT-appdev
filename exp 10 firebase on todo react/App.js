import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { db } from './firebaseConfig';
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Load todos from Firestore in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const todosArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTodos(todosArray);
    });

    return () => unsubscribe();
  }, []);

  // Add a new todo to Firestore (with debug logging)
  const addTodo = async () => {
    if (todo.trim().length === 0) return;

    try {
      await addDoc(collection(db, "todos"), { text: todo });
      console.log("Todo added successfully!"); // Metro console will show this
      setTodo(''); // clear input after adding
    } catch (err) {
      console.error("Error adding todo:", err); // Metro console will show error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new todo"
          value={todo}
          onChangeText={setTodo}
          style={styles.input}
        />
        <Button title="Add" onPress={addTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No todos yet!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginRight: 10,
    borderRadius: 5
  },
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
});
