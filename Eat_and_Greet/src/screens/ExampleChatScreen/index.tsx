import { View, Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

import { Toolbar } from '../../comps/Toolbar/toolbar';
import SpecificChatHeader from '../../comps/SpecificChat/SpecificChatHeader';
import SpecificChatMessage from '../../comps/SpecificChat/SpecificChatMessage';
import TextBox from '../../comps/SpecificChat/SpecificChatTextbox';

import styles from '../../style';
import localstyles from './style';
import React from 'react';

const messageArray = [ { sentFromMe: true, timeStamp: "4:45 PM", message: "Hey Jimmy, how's it going"},
                       { sentFromMe: false, timeStamp: "4:53 PM", message: "Brand new whip got no keys \nTailor my clothes, no starch please\nSoon as I nut, you can gon' leave\nGot M's in the bank, like \"yes, indeed\""},
                       { sentFromMe: false, timeStamp: "4:54 PM", message: "WAH WAH WAH (Bitch I'm Lil Baby)"},
                       { sentFromMe: true, timeStamp: "9:30 PM", message: "Intruiging argument"},
                       { sentFromMe: true, timeStamp: "9:30 PM", message: "However, I believe you failed to consider just one thing: \nI frequently engage in sexual intercouse with you mother"},
                       { sentFromMe: false, timeStamp: "10:12 PM", message: "Forgive me lord, I have allowed this fallacy in my logic to slip my brain. I will be better next time"},
                       { sentFromMe: true, timeStamp: "10:15 PM", message: "You are a fool"},
                       { sentFromMe: false, timeStamp: "11:33 PM", message: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible."},
                      ];

function ExampleChatScreen() {

    return (
      <View style={styles.ScreenContainer}>
      <View style={styles.OuterBox}>
        <SpecificChatHeader />
        <View style={[styles.InnerBox, {height: height - 265} ]}>
          <View style={[styles.InnerBox, {height: height - 320, justifyContent: 'flex-end'} ]}>
            <ScrollView style={localstyles.ScrollChats}>
            {messageArray.map((messageObj) => (
              <SpecificChatMessage 
                message={messageObj.message}
                sentFromMe={messageObj.sentFromMe} 
                timeStamp={messageObj.timeStamp} 
                key={messageObj.message + messageObj.timeStamp}
              />
            ))}
            </ScrollView>
          </View>
          <TextBox />
        </View>
      </View>
      <Toolbar />
    </View>
    );

}

export default ExampleChatScreen;