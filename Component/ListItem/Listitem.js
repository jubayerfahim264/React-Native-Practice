import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Listitem = (props) => {
  return (
    <Pressable onPress={props.onItem}>
      <View style={styles.Listitem}>
        <Text>{props.placeName}</Text>
      </View>
    </Pressable>
  );
};
export default Listitem;

const styles = StyleSheet.create({
  Listitem: {
    backgroundColor: "#eee",
    width: "100%",
    marginTop: 7,
    padding: 7,
  },
});
