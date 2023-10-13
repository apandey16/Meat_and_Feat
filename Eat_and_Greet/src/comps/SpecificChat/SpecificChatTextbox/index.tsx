import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import localStyles from './index.styles';

const TextBox = () => {
    const [text, setText] = useState('');
    const handleTextChange = (userInput: string) => {
        setText(userInput);
    };

  return (
    <View style={localStyles.container}>
      <TextInput
        style={localStyles.input}
        placeholder="Type Message Here"
        onChangeText={handleTextChange}
        value={text}
      />
      <TouchableOpacity style={localStyles.circleButton}>
            <Feather name="arrow-up" size={24} color="black" style={localStyles.arrowIcon}/>
      </TouchableOpacity>
    </View>
  );
};

export default TextBox;