import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputList from "./Component/InputList/InputList";
import PlaceList from "./Component/PlaceList/PlaceList";
import PlaceDetails from "./Component/PlaceDetails/PlaceDetails";

export default function App() {
  const [text, setText] = useState("");
  const [List, setList] = useState([]);
  const [selectPlaced, setSelectPlaced] = useState(null);

  const hadleCloseBtn = () => {
    setSelectPlaced(null);
  };
  const handleDeleteBtn = (key) => {
    setList(List.filter((place) => place.key !== key));
    setSelectPlaced(null);
  };
  const handleSelectPlaced = (key) => {
    const place = List.find((place) => {
      return place.key === key;
    });
    setSelectPlaced(place);
  };
  let placeDetails = null;
  if (selectPlaced !== null) {
    placeDetails = (
      <PlaceDetails
        place={selectPlaced}
        hadleCloseBtn={hadleCloseBtn}
        handleDeleteBtn={handleDeleteBtn}
      />
    );
  }

  return (
    <View style={styles.container}>
      {placeDetails}
      <InputList text={text} setText={setText} List={List} setList={setList} />
      <PlaceList
        text={text}
        setText={setText}
        List={List}
        handleSelectPlaced={handleSelectPlaced}
      />
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
