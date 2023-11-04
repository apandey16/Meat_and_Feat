import { StyleSheet } from "react-native";

const browseStyle = StyleSheet.create({
  InfoContainer: {
    backgroundColor: "#8EA7E9",
    height: 550,
    width: 340,
    top: -35,
  },
  ScrollContainer: {
    padding: 0,
    margin: 0,
    bottom: 50,
  },
  InnerScrollContainer: {
    marginTop: 40
  },
  PostContainer: {
    backgroundColor: "#E5E0FF",
    width: 340,
    height: 95,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 50,
    justifyContent: "center",
    alignItems: "flex-start",
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
