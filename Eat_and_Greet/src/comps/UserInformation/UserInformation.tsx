import React, {useState, useEffect} from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CircularIcon from '../CircularIcon/CircularIcon';
import styles from '../../style';
 import UserManager from '../../logic/UserManager';
import SpaceManager from '../../logic/SpaceManager';

interface UserInformationProps {
    editing : boolean;
}

const UserInformation = ({editing} : UserInformationProps) => {
    const userController = new UserManager();
    const spaceController = new SpaceManager();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState("");

    const getData = async() => {
        const email = await userController.getEmail();
        setEmail(email!);

        setData(await userController.getInterests(email));
      }
      useEffect(() => {
        getData();
      }, []);

    return (
        <View style={localstyles.OuterFlexBox}>
            <View id="Interests" style={styles.FlexOne}>
                <Text style={localstyles.Margin10}>Interests:</Text>
                <ScrollView id="Interest boxes" horizontal={true} style={localstyles.InterestBoxes}>
                {data.map((interest) => (
                    <CircularIcon key={interest} title={interest} buttonSize={80}></CircularIcon>
                    ))}                    
                {editing ? <TouchableOpacity onPress={() => Alert.prompt("Add An Interest!", "Max 14 Characters", text => spaceController.implementInterest(userController, email,  text))}><CircularIcon title="+" buttonSize={80}></CircularIcon></TouchableOpacity> : <View></View>}
                </ScrollView>
            </View>

            <View id="Photos" style={styles.FlexOne}>
            <Text style={localstyles.Margin10}>Photos:</Text>
                <View id="Photo Placeholder" style={localstyles.PhotoPlaceholder}>
                    <Image style={localstyles.ImageStyling} source={require('../../../assets/images/placeholder.png')}></Image>
                </View>
            </View>
        </View>
    );
};

const localstyles = StyleSheet.create({
    OuterFlexBox: {
        flexDirection: 'column', 
        flex: 1,
        backgroundColor: "#E5E0FF"
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
        height: 100, 
        width: 100
    }
});

export default UserInformation;
