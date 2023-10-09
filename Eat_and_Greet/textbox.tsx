import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const TextBox = () => {
const [text, setText] = useState('');

const handleTextChange = (inputText: string) => {
    setText(inputText);
};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
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
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export default TextBox;
