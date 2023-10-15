import { View, Text } from 'react-native';
import localStyles from './index.styles';

interface SpecificChatMessageProps {
  message: string,
  sentFromMe: boolean,
  timeStamp: string
}

const SpecificChatMessage = (props : SpecificChatMessageProps) => {
    
  if(props.sentFromMe) {
    return (
      <View style={localStyles.SentMessageOuterContainer}>
        <Text style={localStyles.TimeStampText}>{props.timeStamp}</Text>
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
      <Text style={localStyles.TimeStampText}>{props.timeStamp}</Text>
    </View>
  );
    

}

export default SpecificChatMessage;