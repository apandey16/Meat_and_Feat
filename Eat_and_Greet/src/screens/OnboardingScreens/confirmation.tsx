import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';

function Confirmation() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.ScreenContainer}>
        <View style={styles.OuterBox}>
            <View style={styles.InnerBox}>  
                <Text style={styles.HeaderText}>ID Verification</Text>
                <Text style={styles.Subheading}></Text>                
                <Text style={styles.Text}>
                Your ID was successfully verified! Welcome to Eat&Greet!!
                    </Text>
                <RoundedButton name="Home Page" height="7%" top="10%" onPress={() => navigation.navigate('Home')}/> 
            </View>
        </View>
      </View>
    );
}

export default Confirmation;