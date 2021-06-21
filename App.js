import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GamesScreen from "./screens/GamesScreen";
import GameOver from "./screens/GameOver";

const fetchFonts = () => {
  return Font.loadAsync({
    "ubuntu": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });
};

export default function App() {
  const [userNum, setUserNum] = useState();
  const [rounds, setRounds] = useState(0);
  const [dataLoader, setDataLoader] = useState(false);

  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoader(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  const startGameHandler = (selectedNum) => {
    setUserNum(selectedNum);
  };

  const gameOverHandler = (noofRounds) => {
    setRounds(noofRounds);
  };

  const startNewGame = () => {
    setUserNum("");
    setRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNum && rounds < 1) {
    content = <GamesScreen userChoice={userNum} onGameOver={gameOverHandler} />;
  } else if (rounds > 0) {
    content = (
      <GameOver rounds={rounds} selectedNum={userNum} reset={startNewGame} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
});
