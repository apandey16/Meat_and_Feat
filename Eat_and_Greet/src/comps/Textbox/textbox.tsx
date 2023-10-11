import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './style';

interface TextBoxProps {
  placeholder: string;
}

const TextBox = ( {placeholder} : TextBoxProps ) => {
const [text, setText] = useState('');

const handleTextChange = (userInput: string) => {
    setText(userInput);
};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleTextChange}
        value={text}
      />
    </View>
  );
};

export default TextBox;
