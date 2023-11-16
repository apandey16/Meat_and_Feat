import { StyleSheet } from "react-native";

const SpecificChatTextboxStyles = StyleSheet.create({
  container: {
    width: "90%",
    height: "5%",
    backgroundColor: "#FFFFF2",
    borderRadius: 4,
    marginBottom: 0,
    borderColor: "black",
    borderWidth: 0.25,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    alignSelf: "center",
    height: 40,
    padding: 10,
    alignContent: "center",
    maxWidth: '85%'
  },
  circleButton: {
    backgroundColor: "#8EA7E9",
    width: "15%",
    borderRadius: 50,
  },
  arrowIcon: {
    alignSelf: "center",
  },
});

export default SpecificChatTextboxStyles;
