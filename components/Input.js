import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
