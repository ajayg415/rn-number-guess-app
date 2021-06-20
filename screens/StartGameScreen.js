import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import Card from '../components/Card'

const StartGameScreen = () => {
  return <View style={styles.screen}>
    <Text style={styles.title}>Start a New Game</Text>
    <Card style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <TextInput />
      <View style={styles.btnContainer}>
        <Button title="Reset" onPress={() => {}}/>
        <Button title="Confirm" onPress={() => {}}/>
      </View>
    </Card>
  </View>;
};

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 10
    },
    title: {
      fontSize: 20,
      marginVertical: 10
    },
    inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
    },
    btnContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    }
});

export default StartGameScreen;
