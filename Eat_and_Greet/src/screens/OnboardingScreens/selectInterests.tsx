import { Text, View, StyleSheet, Alert, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedHomeButton from '../../comps/RoundedHomeButton/RoundedHomeButton';
import CircularButton from '../../comps/CircularButton/CircularButton';

const { width, height } = Dimensions.get('window');

function SelectInterests() {
    const navigation = useNavigation();
    const buttonSize = width/5.7;
    const borderRadius = 20;
    
    return (
        <View style={styles.ScreenContainer}>
        <View style={styles.OuterBox}>
            <View style={styles.InnerBox}>  
                <Text style={styles.HeaderText}>Some Basic Info:</Text>
                <Text style={styles.Subheading}>Select all interests</Text>
                <View style={localStyles.buttonRow}>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Park' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Walk' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Runs' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='TV' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Games' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Gym' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Sport' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Meals' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Cars' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Music' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Study' buttonSize={buttonSize} borderRadius={borderRadius}/>
                    <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")} title='Other' buttonSize={buttonSize} borderRadius={borderRadius}/>
                </View>
                <RoundedHomeButton name="Next" height="7%" top="-8%" onPress={() => navigation.navigate('Email Verification')}/> 
            </View>
        </View>
      </View>
    );
}

const localStyles = StyleSheet.create({
    buttonRow: {    
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop:20,
        justifyContent:"center",
        // justifyContent: 'space-between',
    },
  });

export default SelectInterests;