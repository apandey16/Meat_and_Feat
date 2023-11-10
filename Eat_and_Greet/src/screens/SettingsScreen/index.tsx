import React from 'react';
import { View, Image } from 'react-native';
import { List, Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import localStyles from './styles';
import styles from '../../style';
import { signOut, getAuth, deleteUser } from 'firebase/auth';
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const SettingsScreen = () => {
  const [notifications, setNotifications] = React.useState<boolean>(false);

  const navigation = useNavigation();

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const auth = getAuth();

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
      navigation.navigate('Welcome');
    } catch (e) {
      console.error(e);
    }
  };

  const db = getFirestore();

  const deleteAccount = async () => {
    try {
      if (auth.currentUser != null){
        await deleteDoc(doc(db, "Users", auth.currentUser.uid));
        await deleteUser(auth.currentUser);
        alert("Account Deleted");
        navigation.navigate('Welcome');
      }
      
    } catch (e) {
      alert("Error Deleting Account");
      console.error(e);
    }
  };

  const toggleFunction = () => <Switch value={notifications} onValueChange={toggleNotifications} ios_backgroundColor={'#0000'}/>;
  const chevronFunction = () => <Image style={{
    resizeMode: 'contain',
    height: 10,
    width: 10,
  }} source={require('../../../assets/images/chevron-right.png')} />
  
  return (
    <View style={styles.ScreenContainer}>
    <View style={localStyles.background}>
      <View style={localStyles.outerBox}>
        
        <List.Section>
          <List.Subheader style={localStyles.subheader}>General Settings</List.Subheader>
          <List.Item
            title="Notifications"
            right={toggleFunction}
          />
          <List.Item  
            title="Account"
            onPress={() => console.log('account button press')} 
            right={chevronFunction}
          />
          <List.Item  
            title="Privacy"
            onPress={() => console.log('privacy button press')} 
            right={chevronFunction}
          />
          <List.Item  
            title="Security"
            onPress={() => console.log('security button press')} 
            right={chevronFunction}
          />
        </List.Section>
        <List.Section style={{ marginTop: 10 }}>
          <List.Subheader style={localStyles.subheader}>Login</List.Subheader>
          <List.Item  
            title="Log Out"
            onPress={logout}
            right={chevronFunction}
          />
          <List.Item  
            title="Delete Account"
            onPress={deleteAccount}
            right={chevronFunction}
          />
        </List.Section>

      </View>
    </View>
    <Toolbar />
    </View>
  );
};

export default SettingsScreen;