import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const ExampleChatScreen = StyleSheet.create({
  ScrollChats: {
    maxWidth: "95%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  InnerBox: {
    height: height - 265,
    justifyContent: "flex-end",
  },
});

export default ExampleChatScreen;
