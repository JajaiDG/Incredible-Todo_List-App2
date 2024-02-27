import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';

const ToDoList = () => {
    return (
        <ScrollView style={styles.listContainer}>
            <Pressable>
                <Text style={[styles.task, styles.completed]}>Do laundry</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.task}>Go to gym</Text>
            </Pressable>
            <Pressable>
                <Text style={[styles.task, styles.completed]}>Walk dog</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 20,
    },
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
});

export default ToDoList;
