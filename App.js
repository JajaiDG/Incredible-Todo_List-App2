import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50, // Adjusted for visibility
    },
});

export default App;
// The App component is the main entry point for the application. It renders the ToDoList and ToDoForm components. The ToDoList component displays the list of tasks, and the ToDoForm component provides a form to add new tasks. The styles object is used to define the styles for the container.