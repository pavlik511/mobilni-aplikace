import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import TodoList from "./src/screens/TodoList";
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect } from 'react';
/* 
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreen from "./src/screens/HomeScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Aplikace"                   
    }
  }
);

export default createAppContainer(navigator);
*/

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() =>{
    async function authenticate(){
      const result = await LocalAuthentication.authenticateAsync();
    }
    authenticate();
  });
  




  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>


        <Stack.Screen
          name="ToDoList"
          component={TodoList}
          options={{title: 'Úkolníček'}}
        />
        {/**  <Stack.Screen
          name="Screen"
          component={ComponentsScreen}
          options={{title: 'Screen pro komponenty'}}
        />
        
        <Stack.Screen
          name="List"
          component={TodoList}
          options={{title: 'Úkolníček'}}
        />*/}
       

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
