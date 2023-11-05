import React from 'react';
import { View } from 'react-native';
import { List, Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import localStyles from './styles';
import styles from '../../style';

const SettingsScreen = () => {
  const [notifications, setNotifications] = React.useState<boolean>(false);

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const toggleFunction = () => <Switch value={notifications} onValueChange={toggleNotifications} ios_backgroundColor={'#0000'}/>;
  const chevronFunction = () => <List.Icon icon="chevron-right" />;

  const navigation = useNavigation();

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
            title="Switch Account"
            onPress={() => console.log('switch account button press')} 
            right={chevronFunction}
          />
          <List.Item  
            title="Log Out"
            onPress={() => navigation.navigate('Login')}
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