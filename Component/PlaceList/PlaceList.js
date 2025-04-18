import React from "react";
import { FlatList } from "react-native";
import Listitem from "../ListItem/Listitem";

const PlaceList = (props) => {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={props.List}
      renderItem={(info) => {
        return (
          <Listitem
            placeName={info.item.value}
            onItem={() => props.handleSelectPlaced(info.item.key)}
            image={info.item.image}
          />
        );
      }}
    />
  );
};
export default PlaceList;
