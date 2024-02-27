import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        // Placeholder for add task logic
        console.log(task); // Log the task or add it to your state
        setTask(''); // Reset the input field
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default ToDoForm;
