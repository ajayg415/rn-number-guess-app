import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import { styleSheets } from "min-document";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateRandomNumber(min, max, exclude) : rndNum;
};

const GamesScreen = ({ userChoice }) => {
  const [currGuess, setCurrGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>
      <NumberContainer>{currGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="UPPER" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GamesScreen;
