import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import CircularIcon from '../CircularIcon/CircularIcon';
import styles from '../../style';
 


const UserInformation = () => {
    return (
        <View style={localstyles.OuterFlexBox}>
            <View id="Interests" style={styles.FlexOne}>
                <Text style={localstyles.Margin10}>Interests:</Text>
                <ScrollView id="Interest boxes" horizontal={true} style={localstyles.InterestBoxes}>
                    <CircularIcon title="Cooking" buttonSize={80}></CircularIcon>
                    <CircularIcon title="Sleeping" buttonSize={80}></CircularIcon>
                    <CircularIcon title="Coding" buttonSize={80}></CircularIcon>
                    <CircularIcon title="Cleaning" buttonSize={80}></CircularIcon>
                    <CircularIcon title="Philosophy" buttonSize={80}></CircularIcon>

                </ScrollView>
            </View>

            <View id="Photos" style={styles.FlexOne}>
            <Text style={localstyles.Margin10}>Photos:</Text>
                {/* <ArrowIcon> on click switch which photo is displayed in the require, probably through state</ArrowIcon> */}
                <View id="Photo Placeholder" style={localstyles.PhotoPlaceholder}>
                    <Image style={localstyles.ImageStyling} source={require('../../../assets/images/placeholder.png')}></Image>
                </View>
                {/* <ArrowIcon></ArrowIcon> */}
            </View>
        </View>
    );
};

const localstyles = StyleSheet.create({
    OuterFlexBox: {
        flexDirection: 'column', 
        flex: 1
    },
    Margin10: {
        margin: 10
    },
    InterestBoxes: {
        padding:10, 
        paddingRight: 10, 
        flexDirection: 'row'
    },
    PhotoPlaceholder: {
        backgroundColor: '#FFF2F2', 
        alignSelf: 'center', 
        marginBottom: 20, 
        width: "80%"
    },
    ImageStyling : {
        alignSelf: 'center', 
        resizeMode: "cover", 
        height: 150, 
        width: 200
    }
});

export default UserInformation;