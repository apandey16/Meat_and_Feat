import { StyleSheet } from "react-native";

const browseStyle = StyleSheet.create({
  InfoContainer: {
    backgroundColor: "#8EA7E9",
    height: "80%",
    width: "87%",
    top: "-5%",
    borderRadius: 10,
}, 
  PostContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: "15%",
    borderRadius: 10,
    borderColor: "#8EA7E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  PostText: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    fontSize: 30
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
  ScrollContainer: {
    width: "100%",
    height: "100%",
    justifyItems: "space-evenly",
    alignItems: "center",
  }
});

export default browseStyle;
