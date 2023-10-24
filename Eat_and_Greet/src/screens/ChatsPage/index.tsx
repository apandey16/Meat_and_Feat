import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatCard from '../../comps/ChatCard/ChatCard'; 

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';

function HomeScreen() {
    const navigation = useNavigation();

    const chatArray = [ { senderName: "Basketball Chat", timestamp:"4:45 PM", isRead: false, nav: () => navigation.navigate('Example Chat'), message: "Steph said: Game@2:30 tmrw" },
                        { senderName: "@logidoke", timestamp:"12:12 PM", isRead: false, nav: () => navigation.navigate('Example Chat'), message: "Sent a meme on Instagram, check it out" },
                        { senderName: "@steelstine", timestamp:"10:31 AM", isRead: true, nav: () => navigation.navigate('Example Chat'), message: "Car go VROOOM, just like me on coffee" },
                        { senderName: "@camalam2002", timestamp:"10:30 AM", isRead: false, nav: () => navigation.navigate('Example Chat'), message: "I am here to code bugs and chew gum, and I'm all out of gum" },
                        { senderName: "@robertvermeulen_", timestamp:"6:15 AM", isRead: true, nav: () => navigation.navigate('Example Chat'), message: "Hello there! Wanna go on a run?" } 
                      ];

    return (
      <View style={styles.ScreenContainer}>
      <View style={styles.OuterBox}>
        {chatArray.map((chatObj) => (
          <ChatCard senderName={chatObj.senderName}
                    message={chatObj.message} 
                    timestamp={chatObj.timestamp}
                    isRead={chatObj.isRead} 
                    onPress={chatObj.nav}
                    key={chatObj.senderName}
          />
        ))}
      </View>
      <Toolbar />
    </View>
    );

}

export default HomeScreen;