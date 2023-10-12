import { Text, View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedHomeButton from '../../comps/RoundedHomeButton/RoundedHomeButton';
import CircularButton from '../../comps/CircularButton/CircularButton';

function SelectInterests() {
    const navigation = useNavigation();
    const buttonSize = 81.66;
    
    return (
        <View style={styles.ScreenContainer}>
        <View style={styles.OuterBox}>
            <View style={styles.InnerBox}>  
                <Text style={styles.HeaderText}>Some Basic Info:</Text>
                <Text style={styles.Subheading}>Select all interests</Text>
                <View style={localStyles.buttonRow}>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Park' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Walk' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Runs' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='TV' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Games' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Gym' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Sport' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Meals' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Cars' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Music' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Study' buttonSize={buttonSize}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Other' buttonSize={buttonSize}/>
                </View>
                <RoundedHomeButton name="Next" height="7%" top="-8%" onPress={() => navigation.navigate('Email Verification')}/> 
            </View>
        </View>
      </View>
    );
}

const localStyles = StyleSheet.create({
    buttonRow: {    
        flex: 3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop:20,
        justifyContent: 'space-between',
    },
  });

export default SelectInterests;