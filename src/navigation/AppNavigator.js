import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';



const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenListeners={{ headerShown: false }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='RecipeList' component={RecipeListScreen}/>
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator

const styles = StyleSheet.create({})