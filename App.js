import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputList from "./Component/InputList/InputList";
import PlaceList from "./Component/PlaceList/PlaceList";

export default function App() {
  const [text, setText] = useState("");
  const [List, setList] = useState([]);
  return (
    <View style={styles.container}>
      <InputList text={text} setText={setText} List={List} setList={setList} />
      <PlaceList text={text} setText={setText} List={List} setList={setList} />
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
});
