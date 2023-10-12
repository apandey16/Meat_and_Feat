import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedHomeButton from '../../comps/RoundedHomeButton/RoundedHomeButton';

function IdVerify() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.ScreenContainer}>
        <View style={styles.OuterBox}>
            <View style={styles.InnerBox}>  
                <Text style={styles.HeaderText}>ID Verification</Text>
                <Text style={styles.Subheading}></Text>                
                <Text style={styles.Text}>
                Click the Button below to be redirected to ID.me
                    </Text>
                <RoundedHomeButton name="ID.me" height="7%" top="10%" onPress={() => navigation.navigate('Confirmation')}/> 
            </View>
        </View>
      </View>
    );
}

export default IdVerify;