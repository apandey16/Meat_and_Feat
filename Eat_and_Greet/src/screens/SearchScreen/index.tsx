import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';
import React from 'react';

function SearchScreen() {
    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <Text>SEARCH SCREEN</Text>
        </View>
        <Toolbar />
      </View>
    );
}

export default SearchScreen;