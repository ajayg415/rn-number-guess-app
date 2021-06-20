import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GamesScreen from "./screens/GamesScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = (selectedNum) => {
    setUserNum(selectedNum);
  };

  const gameOverHandler = (noofRounds) => {
    setRounds(noofRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNum && rounds < 1) {
    content = <GamesScreen userChoice={userNum} onGameOver={gameOverHandler} />;
  } else if(rounds > 0){
    content = <GameOver />;
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
