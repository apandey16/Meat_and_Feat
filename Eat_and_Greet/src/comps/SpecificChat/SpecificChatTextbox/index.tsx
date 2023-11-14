import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import localStyles from "./index.styles";

interface SCTBProps {
  onTextChange: any;
  onMessageSend: any;
  sending: boolean;
}

const SpecificChatTextBox = (props: SCTBProps) => {
  const [text, setText] = useState("");
  const handleTextChange = (userInput: string) => {
    setText(userInput);
    props.onTextChange(userInput);
  };
  const handleMessageSend = () => {
    console.log("begin send message")
    setText("");
    props.onMessageSend();
  };

  return (
    <View style={localStyles.container}>
      <TextInput
        style={localStyles.input}
        placeholder="Type Message Here"
        onChangeText={handleTextChange}
        value={text}
        onSubmitEditing={handleMessageSend}
        returnKeyType="send"
      />
      <TouchableOpacity
        style={localStyles.circleButton}
        onPress={handleMessageSend}
      >
        {props.sending ? (
          <Feather
            name="check-circle"
            size={24}
            color="black"
            style={localStyles.arrowIcon}
          />
        ) : (
          <Feather
            name="arrow-up"
            size={24}
            color="black"
            style={localStyles.arrowIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SpecificChatTextBox;
