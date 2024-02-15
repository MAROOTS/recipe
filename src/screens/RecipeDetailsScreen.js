import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const RecipeDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
        <FontAwesome name={"heart-o"} size={28} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            //backgroundColor: 'red',
            height: 300,
            width: 300,
            position: "absolute",
            top: -190,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        {/*Recipe name*/}
        <Text style={{ marginTop: 100, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>
        {/*Recipe name*/}
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "orange",
                  //paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <FontAwesome name={"clock-o"} size={28} color="yellow" />
                <Text style={{ fontSize: 20 }}>{item.time}</Text>
              </View>

              <View
                style={{
                  backgroundColor: "rgba(135, 255, 255, 0.8)",
                  //paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <FontAwesome name={"clock-o"} size={28} color="yellow" />
                <Text style={{ fontSize: 20 }}>{item.difficulty}</Text>
              </View>

              <View
                style={{
                  backgroundColor: "pink",
                  //paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <FontAwesome name={"clock-o"} size={28} color="yellow" />
                <Text style={{ fontSize: 20 }}>{item.calories}</Text>
              </View>
            </View>

            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                Ingredients:
              </Text>

              {item.ingredients.map((ingredient,index) => {
                return (
                  <View style={{ flexDirection: "row", alignItems: "center" }} key={index}>
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                Cooking Steps:
              </Text>

              {item.steps.map((step, index) => {
                return (
                  <Text
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1})${step}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
