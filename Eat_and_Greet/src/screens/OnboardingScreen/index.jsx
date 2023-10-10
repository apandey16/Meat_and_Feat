import { StyleSheet, Button, Text, View } from 'react-native';

function OnboardingScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the onboarding page</Text>
        <Text>Please Provide your social security number to create the account</Text>
      </View>
    );
}

export default OnboardingScreen;