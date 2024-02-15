import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={{ width: "100%", height: 300, marginTop: 40 }}
      />
      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        40k+ Premium Recipes
      </Text>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
