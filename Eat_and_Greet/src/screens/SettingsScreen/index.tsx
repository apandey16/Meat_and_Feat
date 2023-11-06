import React from 'react';
import { View } from 'react-native';
import { List, Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import localStyles from './styles';
import styles from '../../style';
import { signOut, getAuth } from 'firebase/auth';

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

  const toggleFunction = () => <Switch value={notifications} onValueChange={toggleNotifications} ios_backgroundColor={'#0000'}/>;
  const chevronFunction = () => <List.Icon icon="chevron-right" />;

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
        </List.Section>

      </View>
    </View>
    <Toolbar />
    </View>
  );
};

export default SettingsScreen;