import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import TextBox from '../../comps/Textbox/textbox';
import React from 'react';

function BasicInfo() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.Background}>
      <ScrollView>
        <View style={styles.ScreenContainer}>
          <View style={styles.OuterBox}>
              <View style={styles.InnerBox}>  
                  <Text style={styles.HeaderText}>Let's Get Started...</Text>
                  <Text style={styles.SubHeaderText}>Name:</Text>
                  <TextBox placeholder="First" top="-3%"/>
                  <TextBox placeholder="Last" top="-3%"/>
                  <Text style={styles.SubHeaderText}>Date of Birth:</Text>
                  <TextBox placeholder="mm/dd/yyyy" top="-3%"/>
                  <Text style={styles.SubHeaderText}>Email Address:</Text>
                  <TextBox placeholder="eat&great@gmail.com" top="-3%"/>
                  <Text style={styles.SubHeaderText}>Create Password:</Text>
                  <TextBox placeholder="Password" top="-3%"/>
                  <RoundedButton name="Profile Photo" height="7%" onPress={() => navigation.navigate('Photo Upload')}/>
              </View>
          </View>
          <RoundedButton name="Next" height="7%" onPress={() => navigation.navigate('Select Interests')}/> 
        </View>
      </ScrollView>
      </View>
    );
}

export default BasicInfo;