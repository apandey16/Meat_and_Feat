import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import localstyle from './styles';


interface ChatCardProps {
  senderName: string;
  message: string;
  timestamp: string;
  onPress?: () => void;
  isRead?: boolean;

}

const ChatCard = ({ senderName, message, timestamp, onPress, isRead} : ChatCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={localstyle.container}>
      {/*<View style={localstyle.iconContainer}>
        {isRead ? (
          <Icon name="check-circle" size={10} color="#154734" />
        ) : (
          <Icon name="circle" size={10} color="#BD8B13" />
        )}
        </View>*/}
      <Text style={localstyle.senderName}>{senderName}</Text>
        <Text style={localstyle.message}>{message}</Text>
        <Text style={localstyle.timestamp}>{timestamp}</Text>
      
    
    </TouchableOpacity>
  );
};



export default ChatCard;
