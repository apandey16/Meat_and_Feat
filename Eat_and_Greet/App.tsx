import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Toolbar } from './comps/Toolbar/toolbar'; 
import TextBox from './textbox';

export default function App() {
  return (
    <View style={styles.container}>
      <Toolbar />
      <StatusBar style="auto" />
      <TextBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
