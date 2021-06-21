import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from '../constants/colors'

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
    },
    headerTitle: {
        fontWeight: 'bold',
        color:'#000',
        fontSize: 18,
        fontFamily: 'ubuntu-bold'
    }
});

export default Header;
