import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';

interface ChooseImageProps {
  onPress?: () => void;
  buttonSize: number;
  imagePath: string;
  color?: string;
}

const ChooseImageButton = (props: ChooseImageProps) => {
    const variablestyles = StyleSheet.create({
        outerSizing: {
            borderRadius: props.buttonSize,
            height: props.buttonSize,
            width: props.buttonSize,
            justifyContent: 'center',
        },
        innerSizing: {
            height: props.buttonSize - props.buttonSize/2.5,
            width: props.buttonSize - props.buttonSize/2.5,
            marginLeft: props.buttonSize/5,
            marginBottom: props.buttonSize/10
        },
        coloring: {
            backgroundColor: props.color, 
        }
    })
    return (
        <View style={[variablestyles.outerSizing, variablestyles.coloring, {position: 'relative'}]}>
            <TouchableOpacity onPress={props.onPress}>
                <Image style={[variablestyles.innerSizing, {position: 'relative'}]} source={require('../../../assets/images/uploadImage.png')}></Image>
            </TouchableOpacity>
        </View>
    )
  }

  const defaultProps: ChooseImageProps = {
    buttonSize: 50,
    imagePath: '../../../assets/images/uploadImage.png',
    color: '#E5E0FF'
};

ChooseImageButton.defaultProps = defaultProps;

export default ChooseImageButton;