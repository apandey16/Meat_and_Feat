import React from 'react';
import { Text, View , StyleSheet, PixelRatio} from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

import localStyles from './index.styles'

interface TextBoxProps {
    displayText : string;
    displayText2 ?: string;
    textSize : number;
}

const TextBox = ( {displayText, displayText2, textSize} : TextBoxProps ) => {
    const propsStyles = StyleSheet.create({
        sizing: {
            fontSize: getFontSize(textSize)
        }
    })

    if (displayText2) {
        return (
            <View style={localStyles.LineContainer}>
                <View style={localStyles.Line} />
                <View style={localStyles.TwoDisplayTextContainer}>
                    <Text style={ [localStyles.DisplayText, propsStyles.sizing] }>{displayText}</Text>
                    <Text style={ [localStyles.DisplayText, propsStyles.sizing] }>{displayText2}</Text>
                </View>
                <View style={localStyles.Line} />
            </View>
          );
    }
    
    return (
        <View style={localStyles.LineContainer}>
            <View style={localStyles.Line} />
            <Text style={ [localStyles.DisplayText, propsStyles.sizing] }>{displayText}</Text>
            <View style={localStyles.Line} />
        </View>
      );
};

const defaultProps: TextBoxProps = {
  displayText: "",
  textSize: 20
};
TextBox.defaultProps = defaultProps;

export default TextBox;
