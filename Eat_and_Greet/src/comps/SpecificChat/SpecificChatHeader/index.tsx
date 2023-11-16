import React from "react";
import { View, Text } from "react-native";

import style from "../../../style";
import localStyles from "./index.styles";
import ChooseImageButton from "../../ChooseImageButton/ChooseImageButton";

interface SCHTypes {
  title?: string;
}
const SpecificChatHeader = (props: SCHTypes) => {
  return (
    <View style={localStyles.HeaderContainer}>
      <View style={localStyles.HeaderImageContainer}>
        <ChooseImageButton />
      </View>
      <View style={localStyles.HeaderTextContainer}>
        <Text style={style.HeaderText}>{props.title}</Text>
      </View>
    </View>
  );
};

export default SpecificChatHeader;
