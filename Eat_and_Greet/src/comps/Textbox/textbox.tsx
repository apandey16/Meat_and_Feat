import React, { useState } from 'react';
import { TextInput, View , StyleSheet} from 'react-native';
import styles from './style';

interface TextBoxProps {
  placeholder ?: string;
  top ?: any;
  left ?: any;
  bottom ?: any;
  right ?: any;
  width ?: any;
  height ?: any;
}

const TextBox = ( {placeholder, top, left, bottom, right, width, height} : TextBoxProps ) => {
const [text, setText] = useState('');
const handleTextChange = (userInput: string) => {
    setText(userInput);
};
const localstyle = StyleSheet.create({
  placement: { 
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      position: 'relative'
  },
  sizing: {
      width: width,
      height: height, 
  }
})


  return (
    <View style= {[styles.container, localstyle.placement, localstyle.sizing]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleTextChange}
        value={text}
      />
    </View>
  );
};

const defaultProps: TextBoxProps = {
  placeholder : 'Insert Text Here...',
  top : 0,
  left : 0,
  bottom : 0,
  right : 0,
  width : "80%",
  height : "5%"
};
TextBox.defaultProps = defaultProps;

export default TextBox;
