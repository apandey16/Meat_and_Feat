import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import TextBox from '../../comps/Textbox/textbox';
import ScreenSplitLine from '../../comps/ScreenSplitLine';


import localStyles from './index.styles';
import styles from '../../style';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <View style={ [styles.ScreenContainer, {justifyContent: 'flex-start'}] }>
        <StatusBar style="auto" />
        <View style={ [styles.OuterBox, localStyles.OuterBox] }>
            <View style={ [styles.InnerBox, localStyles.InnerBox] }>
                <View style={localStyles.SignInSectionContainer}>
                    <Text style={ [styles.SubHeaderText, localStyles.SubHeaderText] }>Username</Text>
                    <TextBox placeholder="Enter Username" top="-15%" left="-3%" height="25%" width="90%"/>
                </View>
                <View style={localStyles.SignInSectionContainer2}>
                    <Text style={ [styles.SubHeaderText, localStyles.SubHeaderText] }>Password</Text>
                    <TextBox placeholder="Enter Password" top="-15%" left="-3%" height="25%" width="90%"/>
                </View>
                <RoundedButton name="Sign In" top="-5%" width="65%" height="15%" onPress={() => navigation.navigate('Home')}/>
            </View>
        </View>
        <View style={ [ {height: '5%'} ] }></View>
        <ScreenSplitLine
            displayText="Or"
            textSize={32} />
        <View style={ [ {height: '5%'} ] }></View>
        <RoundedButton name="Log In With Google" onPress={() => null}/>
        <View style={ [ {height: '5%'} ] }></View>
        <ScreenSplitLine 
            displayText="Dont Have an Account?"
            displayText2="Create One Now!"
            textSize={18} />
        <View style={ [ {height: '5%'} ] }></View>
        <RoundedButton name="Make Account" onPress={() => navigation.navigate('Onboarding')}/>
      </View>
    );
}

export default LoginScreen;