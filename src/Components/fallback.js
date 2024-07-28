import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";

const Fallback = () => {
    return (
        <View>
            <Image source={require("../../assets/notes.jpg")} style={styles.fallbackImage} />
            <Text>"Start adding some tasks!"</Text>
        </View>

    )
}

export default Fallback

const styles = StyleSheet.create({
    fallbackImage: {
        height: 300,
        width: 300,
        alignItems: "center",
        marginTop: -500,
        marginLeft: 30,
    }
})
