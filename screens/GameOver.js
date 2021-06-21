import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";

const GameOver = ({ rounds, reset, selectedNum }) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game is Over</BodyText>
      <Image
        style={styles.image}
        source={require("../assets/success.png")}
        resizeMethod="scale"
      />
      <BodyText>Number of rounds: {rounds}</BodyText>
      <BodyText>Selected Number: {selectedNum}</BodyText>
      <Button title="Start a new Game" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
});

export default GameOver;
