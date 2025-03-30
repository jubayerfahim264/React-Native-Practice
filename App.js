import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import Listitem from "./Component/ListItem/Listitem";

export default function App() {
  const [text, setText] = useState("");
  const [List, setList] = useState([]);
  const list = List.map((item, i) => {
    return <Listitem placeName={item} key={i} onItem={() => alert(item)} />;
  });
  return (
    <View style={styles.container}>
      <View style={styles.viewer}>
        <TextInput
          style={styles.input}
          placeholder="Your name here....."
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          title="add Text"
          style={styles.button}
          onPress={() => {
            if (text == "") {
              alert("Please add something");
            } else {
              setList([...List, text]);
            }
          }}
        />
      </View>
      <ScrollView style={{ width: "100%" }}>{list}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
  },
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
