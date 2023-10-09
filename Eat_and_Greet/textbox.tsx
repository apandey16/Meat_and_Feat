import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: '90%',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default TextBox;
