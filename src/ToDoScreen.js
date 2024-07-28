import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "./Components/fallback";

const { width, height } = Dimensions.get('window');

const ToDoScreen = () => {
    // Initialize local states
    const [todo, setToDo] = useState("")
    const [todoList, setToDoList] = useState([])
    const [editToDo, setEditToDo] = useState(null)

    // Handle add
    const handleAddToDo = () => {
        if (todo === "") {
            return;
        }
        setToDoList([
            ...todoList,
            {
                id: Date.now().toString(),
                title: todo
            }])
        setToDo("")
    }

    // Handle delete
    const deleteHandler = (id) => {
        const updatedToDoList = todoList.filter((todo) => todo.id !== id)
        setToDoList(updatedToDoList)
    }

    // Handle edit
    const editHandler = (todo) => {
        setEditToDo(todo)
        setToDo(todo.title)
    }

    // Handle update
    const updateHandler = () => {
        const updatedToDoList = todoList.map((item) => {
            if (item.id === editToDo.id) {
                return { ...item, title: todo }
            }
            return item
        });
        setToDoList(updatedToDoList)
        setEditToDo(null)
        setToDo("")
    }

    const renderToDo = ({ item, index }) => {
        return (
            <View style={styles.renderView}>
                <Text style={styles.renderText}>{item.title}</Text>
                <IconButton icon="pencil" iconColor="white" onPress={() => editHandler(item)} />
                <IconButton icon="trash-can" iconColor="white" onPress={() => deleteHandler(item.id)} />
            </View>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Input some text..."
                    value={todo}
                    onChangeText={(userText) => setToDo(userText)}
                />
                {
                    editToDo ?
                        (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => updateHandler()}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleAddToDo()}
                            >
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>
                        )
                }
                {/* Render to-do list */}
                <FlatList data={todoList} renderItem={renderToDo}></FlatList>
                {
                    todoList.length <= 0 && <Fallback />
                }
            </View>
        </SafeAreaView>
    )
}

export default ToDoScreen

const styles = StyleSheet.create({
    container: {
        // width: "100%",
        width: width - 50,
        height: height - 200,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    textInput: {
        borderWidth: 2,
        borderColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: "black",
        borderRadius: 6,
        paddingVertical: 8,
        marginVertical: 34,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    renderView: {
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    renderText: {
        color: "white",
        fontSize: 20,
        fontWeight: "800",
        flex: 1,
    }
})
