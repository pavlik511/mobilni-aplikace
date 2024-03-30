import React, {useState} from "react";
import { Text, View, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity,  ScrollView} from "react-native";
import Task from "./Task";

const ComponentsScreen = function () {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const handleAddTask = () => {
        setTaskItems([...taskItems, task]);
        setTask(null);
    }
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    return (
        <View style={styles.Container}>
            <View style={styles.List}>
                <Text style={styles.Text}>Co mám dnes udělat...!</Text>
                <ScrollView>
                <View style={styles.Tasks}>
                    {
                        taskItems.map((item, index) =>{
                            return(
                                <TouchableOpacity key={index} onPress={ () => completeTask()}>
                                    <Task key ={index} text={item} />
                                </TouchableOpacity>
                            
                            
                            )
                        })
                    }
                    
                </View>
                </ScrollView>
                
            </View>

            {/**napsání úlohy
             * behavior={Platform.OS ==="ios" ? "pading" : "height"}**/}
        <KeyboardAvoidingView
        
        style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder={"Napsat úkol"} value={task} onChangeText={text => setTask(text)} />
            <TouchableOpacity onPress={() => handleAddTask()}>
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