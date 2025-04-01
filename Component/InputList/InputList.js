import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import MyImg from "../../assets/sylhetView.jpg";

const InputList = (props) => {
  return (
    <View style={styles.viewer}>
      <TextInput
        style={styles.input}
        placeholder="Your name here....."
        value={props.text}
        onChangeText={(text) => props.setText(text)}
      />
      <Button
        title="add Text"
        style={styles.button}
        onPress={() => {
          if (props.text == "") {
            alert("Please add something");
          } else {
            props.setList([
              ...props.List,
              {
                key: Math.random().toString(),
                value: props.text,
                image: MyImg,
              },
            ]);
          }
          props.setText("");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 35,
    width: "100%",
  },
  input: {
    height: 40,
    width: "70%",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 7,
  },
  button: {
    height: 20,
    padding: 3,
  },
});
export default InputList;
