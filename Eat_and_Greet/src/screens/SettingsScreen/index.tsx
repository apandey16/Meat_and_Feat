import React from 'react';
import { View } from 'react-native';
import { List, Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import localStyles from './styles';

const SettingsScreen = () => {
  const [notifications, setNotifications] = React.useState<boolean>(false);

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const navigation = useNavigation();

  return (
    <View style={localStyles.background}>
      <View style={localStyles.outerBox}>
        
        <List.Section>
          <List.Subheader style={localStyles.subheader}>General Settings</List.Subheader>
          <List.Item
            title="Notifications"
            right={() => <Switch value={notifications} onValueChange={toggleNotifications} ios_backgroundColor={'#0000'}/>}
          />
          <List.Item  
            title="Account"
            onPress={() => console.log('account button press')} 
            right={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item  
            title="Privacy"
            onPress={() => console.log('privacy button press')} 
            right={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item  
            title="Security"
            onPress={() => console.log('security button press')} 
            right={() => <List.Icon icon="chevron-right" />}
          />
        </List.Section>
        <List.Section style={{ marginTop: 10 }}>
          <List.Subheader style={localStyles.subheader}>Login</List.Subheader>
          <List.Item  
            title="Switch Account"
            onPress={() => console.log('switch account button press')} 
            right={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item  
            title="Log Out"
            onPress={() => navigation.navigate('Login')}
            right={() => <List.Icon icon="logout" />}
          />
        </List.Section>

      </View>
    </View>
  );
};

export default SettingsScreen;