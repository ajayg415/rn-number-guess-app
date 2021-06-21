import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import defaultStyles from "../constants/default-styles";

const GameOver = ({ rounds, reset, selectedNum }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.bodyText}>Game is Over</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Selected Number: {selectedNum}</Text>
      <Button title="Start a new Game" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
