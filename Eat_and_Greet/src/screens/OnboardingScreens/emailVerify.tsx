import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedHomeButton from '../../comps/RoundedHomeButton/RoundedHomeButton';
import TextBox from '../../comps/Textbox/textbox';

function EmailVerify() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.ScreenContainer}>
        <View style={styles.OuterBox}>
            <View style={styles.InnerBox}>  
                <Text style={styles.HeaderText}>Email Verification</Text>
                <Text style={styles.Subheading}>Please verify your email so you can login with email in the future!</Text>
                
                <TextBox placeholder="Enter Code Here" top="%" />
                
                <Text style={styles.Text}>
                    Didn’t get a code?
                    Check your spam!
                    Or click HERE for a new code.
                    </Text>
                <RoundedHomeButton name="Verify" height="7%" top="10%" onPress={() => navigation.navigate('ID Verification')}/> 
            </View>
        </View>
      </View>
    );
}

export default EmailVerify;