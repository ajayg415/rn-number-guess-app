import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GamesScreen from './screens/GamesScreen';

export default function App() {
  const [userNum, setUserNum] = useState()

  const startGameHandler = selectedNum => {
    setUserNum(selectedNum)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>
  if(userNum) {
    content = <GamesScreen userChoice={userNum}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {

  }
});
