import { Text, View } from 'react-native';

import styles from '../../../style';

function OnboardingScreen() {
    return (
      <View style={styles.ScreenContainer}>
        <Text>This is the onboarding page</Text>
        <Text>Please Provide your social security number to create the account</Text>
      </View>
    );
}

export default OnboardingScreen;