import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatCard from '../../comps/ChatCard/ChatCard'; 

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';

function HomeScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.ScreenContainer}>
      <View style={styles.OuterBox}>
  
        <ChatCard senderName="Basketball Chat" message="Steph said: Game@2:30 tmrw" timestamp="4:45 PM" onPress={() => navigation.navigate('Example Chat')}/>
        <ChatCard senderName="@logidoke" message="Sent a meme on Instagram, check it out" timestamp="12:12 PM" isRead={false} onPress={() => navigation.navigate('Example Chat')}/>
        <ChatCard senderName="@steelstine" message="Car go VROOOM, just like me on coffee" timestamp="10:31 AM" isRead={true} onPress={() => navigation.navigate('Example Chat')}/>
        <ChatCard senderName="@camalam2002" message="I am here to code bugs and chew gum, and I'm all out of gum" timestamp="10:30 AM" isRead={false} onPress={() => navigation.navigate('Example Chat')}/>
        <ChatCard senderName="@robertvermeulen_" message="Hello there! Wanna go on a run?" timestamp="6:15 AM" isRead={true} onPress={() => navigation.navigate('Example Chat')}/>

      </View>
      <Toolbar />
    </View>
    );

}

export default HomeScreen;