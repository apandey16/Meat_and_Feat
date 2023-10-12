import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  CornerButtonOutline: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#8EA7E9",
    borderRadius: 10,
    borderWidth: 2,
  },
  ButtonText: {
    fontFamily: "Courier New",
    fontSize: 36,
    fontWeight: "bold",
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: "#7286D3",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: "#7286D3",
    alignItems: "center",
    justifyContent: "center",
  }
});

export const navHeaderStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#8EA7E9",
  },
  headerTitleStyle: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    color: "black",
    fontSize: 20
  }
});

export default style;
