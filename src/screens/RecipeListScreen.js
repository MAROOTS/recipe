import { StyleSheet, SafeAreaView, View,Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import RecipeCard from '../components/RecipeCard'

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, margin: 16 }}>
      <Header headerText={"Hi, Maroots"} headerIcon={"bell-o"} />
      <SearchFilter icon={"search"} placeholder={"Search for recipes"} />

      <View>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <CategoryFilter />
      </View>

      <View style={{marginTop:22,flex:1}}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Popular Recipes</Text>
        <RecipeCard/>
      </View>
    </SafeAreaView>
  );
}

export default RecipeListScreen

const styles = StyleSheet.create({})