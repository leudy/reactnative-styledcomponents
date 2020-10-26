import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground source={require("./assets/mojave.jpeg")}>
        <SafeAreaView></SafeAreaView>
      </RecipeBackground>
    </Container>
  );
}

const Container = styled.View`
  text-align: center;
  background-color: #fff;
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;
