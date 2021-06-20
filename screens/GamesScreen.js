import React, { useReducer, useState } from "react";
import { View, StyleSheet } from "react-native";

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
};

const styles = StyleSheet.create({});

export default GamesScreen;
