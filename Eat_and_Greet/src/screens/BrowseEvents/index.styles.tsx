import { StyleSheet } from "react-native";

const browseStyle = StyleSheet.create({
  InfoContainer: {
    backgroundColor: "#8EA7E9",
    height: 560,
    width: 340,
    marginVertical: 10  },
  
  PostContainer: {
    backgroundColor: "#E5E0FF",
    width: 340,
    height: 95,
    borderWidth: 10,
    borderColor: "#8EA7E9",
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
