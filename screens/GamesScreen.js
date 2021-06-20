import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Text, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateRandomNumber(min, max, exclude) : rndNum;
};

const GamesScreen = ({ userChoice, onGameOver }) => {
  const [currGuess, setCurrGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currLow = useRef(1);
  const currHigh = useRef(100);

  const nextGuess = (dire) => {
    if (
      (dire === "lower" && currGuess < userChoice) ||
      (dire === "greater" && currGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know this is Wrong...!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (dire === "lower") {
      currHigh.current = currGuess;
    } else {
      currLow.current = currGuess;
    }
    const nextNumber = generateRandomNumber(
      currLow.current,
      currHigh.current,
      currGuess
    );
    setCurrGuess(nextNumber);
    setRounds((curRound) => curRound + 1);
  };

  useEffect(() => {
    if (currGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currGuess, userChoice, onGameOver]);

  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>
      <NumberContainer>{currGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Button title="LOWER" onPress={() => nextGuess("lower")} />
        <Button title="UPPER" onPress={() => nextGuess("greater")} />
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
