import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../Constant";
const CategoryFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              key={category.id}
              style={{
                backgroundColor:index==0 ? "#f96163":"#fff",
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginVertical:17,
              }}
            >
              <Text style={{fontSize:18}}>{category.category} </Text>
            </View>
          );
          
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({});
