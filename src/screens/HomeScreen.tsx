import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ( ) => {
  const navigation = useNavigation();
  return (
  
  
  <View style={styles.view}>
    <Text style={styles.text}>Vítej, uživateli.</Text>
    <Text style={styles.text2}>Níže najdeš různé nástroje pro denní potřebu. Vyber a používej bez omezení dostupné nástroje pro lepší osobní správu a produktivitu.</Text>
    
  
    <TouchableOpacity onPress={() => navigation.navigate("Screen")}>
      <View style={styles.buttons}>
        <Text style={styles.buttonsText}>Kalendář</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Screen")}>
      <View style={styles.buttons}>
        <Text style={styles.buttonsText}>Hodiny</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("List")}>
      <View style={styles.buttons}>
        <Text style={styles.buttonsText}>ToDo list</Text>
      </View>
    </TouchableOpacity>
    <Text>Ahojjj</Text>

  </View>); 


};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 10
    
  },
  text2: {
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
  view: {
    backgroundColor: "#2a9d8f",
    alignItems: "center",
  },
  buttons: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#e9c46a",

  },
  buttonsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default HomeScreen;