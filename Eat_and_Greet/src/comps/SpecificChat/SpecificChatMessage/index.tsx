import { View, Text } from "react-native";
import localStyles from "./index.styles";

interface SpecificChatMessageProps {
  message: string;
  sentFromMe: boolean;
  timeStamp: string;
  sender: string;
}

const SpecificChatMessage = (props: SpecificChatMessageProps) => {
  if (props.sentFromMe) {
    return (
      <View style={localStyles.SentMessageOuterContainer}>
        <View style={localStyles.LittleTextContainer}>
          <Text style={localStyles.TimeStampText}>{props.timeStamp}</Text>
        </View>
        <View style={localStyles.SentMessageInnerContainer}>
          <Text style={localStyles.MessageText}>{props.message}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={localStyles.RecievedMessageOuterContainer}>
      <View style={localStyles.RecievedMessageInnerContainer}>
        <Text style={localStyles.MessageText}>{props.message}</Text>
      </View>
      <View style={localStyles.LittleTextContainer}>
        <Text style={localStyles.TimeStampText}>{props.sender}</Text>
        <Text style={localStyles.TimeStampText}>{props.timeStamp}</Text>
      </View>
    </View>
  );
};

export default SpecificChatMessage;
