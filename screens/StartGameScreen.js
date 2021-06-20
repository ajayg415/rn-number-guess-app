import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const confirmedOut = confirmed && (
    <Card style={styles.summaryContainer}>
      <Text>Choosen Number:</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title='START GAME' onPress={() => onStartGame(selectedNumber)}/>
    </Card>
  );

  const inputHandler = useCallback((val) => {
    setConfirmed(false)
    setEnteredValue(val.replace(/[^0-9]/g, ""));
  }, []);

  const resetInputHandler = useCallback(() => {
    setEnteredValue("");
    setConfirmed(false);
  }, []);

  const confirmInputHandler = useCallback(() => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Number Should be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  }, [enteredValue]);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOut}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
});

export default StartGameScreen;
