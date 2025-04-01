import React from "react";
import { View, Modal, Text, Image, Button } from "react-native";

const PlaceDetails = (props) => {
  return (
    <Modal>
      <View>
        <Image
          source={props.place.image}
          style={{ width: "100%", height: 200 }}
        />
        <Text
          style={{
            textAlign: "center",
            padding: 10,
            margin: 10,
            fontSize: 40,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {props.place.value}
        </Text>
        <View>
          <Button
            title="Delete"
            color="red"
            onPress={() => props.handleDeleteBtn(props.place.key)}
          />
          <Button title="Close" onPress={() => props.hadleCloseBtn()} />
        </View>
      </View>
    </Modal>
  );
};
export default PlaceDetails;
