import { View, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';
import HomePageButton from '../../comps/HomePageButton';

import styles from '../../style';
import localStyles from './index.styles';
import React from 'react';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

function HomeScreen() {
  const navigation = useNavigation();
  
    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <View style={localStyles.ButtonLine}>
            <HomePageButton onPress={() => navigation.navigate('Forums')}
                          textLine1='Subscribed'
                          textLine2='Forums'
                          fontSize={ getFontSize(24) }
            />
            <HomePageButton onPress={() => navigation.navigate('Browse Forums')}
                          textLine1='Find'
                          textLine2='Forums'
                          fontSize={ getFontSize(35) }
            />
          </View>
          <View style={localStyles.ButtonLine}>
            <HomePageButton onPress={() => navigation.navigate('My Events')}
                          textLine1='My'
                          textLine2='Events'
                          fontSize={ getFontSize(32) }
            />
            <HomePageButton onPress={() => navigation.navigate('Chats')}
                          textLine1='My'
                          textLine2='Chats'
                          fontSize={ getFontSize(32) }
            />
          </View>
          <View style={localStyles.ButtonLine}>
            <HomePageButton onPress={() => navigation.navigate('Profile', {visibleScreen : 0, editing : 0})}
                          textLine1='Account'
                          fontSize={ getFontSize(32) }
            />
            <HomePageButton onPress={() => navigation.navigate('Settings')}
                          textLine1='Settings'
                          fontSize={ getFontSize(30) }
            />
          </View>
        </View>
        <Toolbar />
      </View>
    );
}

export default HomeScreen;