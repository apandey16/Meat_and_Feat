import React, { useState } from 'react';
import { TextInput, View , StyleSheet} from 'react-native';
import styles from '../Textbox/style';

interface NumberInputProps {
  placeholder ?: string;
  top ?: any;
  left ?: any;
  bottom ?: any;
  right ?: any;
  width ?: any;
  height ?: any;
  onTextChange: any;
}

const NumberInput = ( {placeholder, top, left, bottom, right, width, height, onTextChange} : NumberInputProps ) => {
const [number, setNumber] = useState("");

const onChanged = (userInput : string) => {
    setNumber(userInput.replace(/[^0-9]/g, ''));
    onTextChange(userInput);
}

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
        keyboardType='numeric'
        onChangeText={text => onChanged(text)}
        placeholder={placeholder}
        value={number}
      />
    </View>
  );
};

const defaultProps: NumberInputProps = {
  placeholder : 'Insert Text Here...',
  top : 0,
  left : 0,
  bottom : 0,
  right : 0,
  width : "80%",
  height : "5%",
  onTextChange: () => {}
};
NumberInput.defaultProps = defaultProps;

export default NumberInput;
