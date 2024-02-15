import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {

  const navigation = useNavigation();
  return (
    <FlatList
      data={recipeList}
      renderItem={({ item }) => (
        <Pressable
          onPress={()=>navigation.navigate('RecipeDetails',{item:item})}
          style={{
            backgroundColor: "white",
            borderRadius: 16,
            alignItems: "center",
            paddingHorizontal: 8,
            paddingVertical: 26,
          }}
          key={item.id}
        >
          <Image
            source={item.image}
            style={{ width: 150, height: 150, resizeMode: "center" }}
          />
          <Text>{item.name}</Text>
          <View style={{ flexDirection: "row",marginTop:8 }}>
            <Text>{item.time}</Text>
            <Text> | </Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{marginRight:5}}>{item.rating}</Text>
              <FontAwesome name="star" size={16} color="red" />
            </View>
          </View>
        </Pressable>
      )}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
