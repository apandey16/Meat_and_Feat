import { StyleSheet } from "react-native";

const browseStyle = StyleSheet.create({
  InfoContainer: {
    backgroundColor: "#8EA7E9",
    height: 550,
    width: 340,
    top: -35,
  },
  PostContainer: {
    backgroundColor: "#E5E0FF",
    width: 340,
    height: 95,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  PostText: {
    fontFamily: "Courier New",
    fontWeight: "bold",
  },
  SortContainer: {
    backgroundColor: "#FFF",
    width: 340,
    height: 70,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 50,
    justifyContent: "center",
  },
  SortText: {
    fontSize: 20,
    left: 40,
    fontFamily: "Courier New",
    fontWeight: "bold",
  },
});

export default browseStyle;
