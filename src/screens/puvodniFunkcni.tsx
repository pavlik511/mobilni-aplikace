

import React, {useState, useEffect} from "react";
import { Text, View, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity,  ScrollView } from "react-native";
import Task from "./Task";
import AsyncStorage from '@react-native-async-storage/async-storage';




const ComponentsScreen = function () {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);

    // Načtení úkolů při spuštění aplikace
    useEffect(() => {
        loadTasks();
    }, []);

    // Funkce pro načtení úkolů z AsyncStorage
    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks !== null) {
                setTaskItems(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error('Chyba při načítání úkolů:', error);
        }
    };

    // Funkce pro uložení úkolů do AsyncStorage
    const saveTasks = async (tasks:String) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Chyba při ukládání úkolů:', error);
        }
    };

    // Přidání úkolu
    const handleAddTask = () => {
        if (task.trim() !== '') {
            const newTasks = [...taskItems, task];
            setTaskItems(newTasks);
            saveTasks(newTasks); // Uložení úkolů po přidání nového úkolu
            setTask('');
        }
    };

    // Označení úkolu jako hotový
    const completeTask = (index) => {
        const itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
        saveTasks(itemsCopy); // Uložení úkolů po označení úkolu jako hotového
    };

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.text}>Co mám dnes udělat...</Text>
                <ScrollView>
                    <View style={styles.tasks}>
                        {taskItems.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <KeyboardAvoidingView style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Napsat úkol"
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={handleAddTask}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#2a9d8f",
        flex: 1,
        
    },
    List: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    Text: {
        fontSize: 24,
        fontWeight: "bold",
        paddingBottom: 10,
        textAlign: "center"
    },
    Tasks: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#e9c46a",
        borderRadius: 60,
        borderColor: "#264653",
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#e9c46a",
        justifyContent: "center",
        borderRadius: 60,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    addText: {

    },
});

export default ComponentsScreen;



