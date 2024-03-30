import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = function () {
    return <Text style={styles.textStyle}>Screen pro komponenty</Text>
    
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;