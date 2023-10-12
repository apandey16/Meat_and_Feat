import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import localstyle from './styles';

interface ChatCardProps {
  senderName: string;
  message: string;
  timestamp: string;
  onPress?: () => void;
}

const ChatCard = ({ senderName, message, timestamp, onPress} : ChatCardProps) => {
  return (
    <View style={localstyle.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={localstyle.senderName}>{senderName}</Text>
        <Text style={localstyle.message}>{message}</Text>
        <Text style={localstyle.timestamp}>{timestamp}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ChatCard;
