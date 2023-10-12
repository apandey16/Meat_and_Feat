import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import localStyles from './index.styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const HeaderBackButton = () => {
    const navigation = useNavigation();

    const route = useRoute();

    if(route.name === 'Login') {
        return null;
    }

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={localStyles.BackButtonContainer}>
            <Image
                source={require('../../../assets/toolbar/black/back.png')}
                style={localStyles.imageSizing}
            />
            <Text style={localStyles.textFormatting}>{" Back"}</Text>
        </TouchableOpacity>
    );
};

export default HeaderBackButton;