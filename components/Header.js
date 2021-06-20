import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
    },
    headerTitle: {
        fontWeight: 'bold',
        color:'#000',
        fontSize: 18,
    }
});

export default Header;
