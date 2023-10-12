import { View } from 'react-native';
import ChatCard from '../../comps/ChatCard/ChatCard'; 

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';

function HomeScreen() {

    return (
      <View style={styles.ScreenContainer}>
      <View style={styles.OuterBox}>
          
        <ChatCard senderName="@johndoe" message="Hello there!" timestamp="10:30 PM"/>
        <ChatCard senderName="Basketball Chat" message="Steph said: Game@2:30 tmrw" timestamp="4:45 PM" />
        <ChatCard senderName="@logidoke" message="Sent a meme on Instagram, check it out" timestamp="12:12 PM" />
        <ChatCard senderName="@steelstine" message="Car go VROOOM, just like me on coffee" timestamp="10:31 AM" />
        <ChatCard senderName="@camalam2002" message="I am here to code bugs and chew gum, and I'm all out of gum" timestamp="10:30 AM"/>
        <ChatCard senderName="@robertvermeulen_" message="Hello there! Wanna go on a run?" timestamp="6:15 AM" />

      </View>
      <Toolbar />
    </View>
    );

}

export default HomeScreen;