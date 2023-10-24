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
            position: 'relative',
            maxHeight: props.buttonSize - props.buttonSize/4,
            width: props.buttonSize - props.buttonSize/4,
            borderRadius: props.buttonSize - props.buttonSize/4
        },
        coloring: {
            backgroundColor: props.color, 
        },
        innerLining: {
            flex: 1, 
            alignItems: 'center', 
            justifyContent: "center",  
            width: 60, 
            maxHeight: 60, 
            borderRadius: 50, 
            alignSelf: 'center' 
        }
    })
    return (
        <View style={[variablestyles.outerSizing, variablestyles.coloring, {position: 'relative'}]}>
            <View style={variablestyles.innerLining}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image style={variablestyles.innerSizing} source={require('../../../assets/images/placeholder.png')} resizeMode="contain"></Image>
                </TouchableOpacity>
            </View>
            
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