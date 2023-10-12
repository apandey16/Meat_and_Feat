import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const localstyle = StyleSheet.create({
    container: {
      padding: 16,
      margin: 8,
      borderRadius: 8,
      backgroundColor: '#E5E0FF',
      width: "90%",
    },
    iconContainer: {
      marginRight: 16,
      alignSelf: 'flex-end',
    },
    textContainer: {
      flex: 1,
      alignSelf: 'flex-start',
    },
    senderName: {
      fontWeight: 'bold',
      marginBottom: 4,
    },
    message: {
      marginBottom: 8,
    },
    timestamp: {
      color: '#666',
      fontSize: getFontSize(12),
    },
  });

export default localstyle;