import { StyleSheet } from "react-native";

const browseStyle = StyleSheet.create({
  InfoContainer: {
    backgroundColor: "#8EA7E9",
    height: "80%",
    width: "87%",
    top: "-5%",
    borderRadius: 10,
}, 
  SortContainer: {
    backgroundColor: "#FFF",
    width: "95%",
    height: "10%",
    borderColor: "#8EA7E9",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  SortText: {
    fontSize: 20,
    left: "10%",
    fontFamily: "Courier New",
    fontWeight: "bold",
  },
  PostContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: 75,
    borderRadius: 10,
    borderColor: "#8EA7E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  PostText: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    fontSize: 35
  },
});

export default browseStyle;
