import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";

const Listitem = (props) => {
  return (
    <Pressable onPress={props.onItem}>
      <View style={styles.Listitem}>
        <Image
          source={props.image}
          style={{ width: 50, height: 50, marginLeft: 10 }}
        />
        <Text
          style={{
            paddingLeft: 15,
            textTransform: "capitalize",
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          {props.placeName}
        </Text>
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
