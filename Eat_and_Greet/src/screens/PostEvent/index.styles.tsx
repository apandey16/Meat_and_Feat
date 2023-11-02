import { StyleSheet } from "react-native";

const postStyle = StyleSheet.create({
  InfoContainer: {
    backgroundColor: "#8EA7E9",
    height: "80%",
    width: "87%",
    top: "-5%",
    borderRadius: 10,
    justifyItems: "space-between",
    alignItems: "center",
  },
  TitleCategoryContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: "12%",
    borderRadius: 5,
    bottom: "10%",
    marginTop: 10,
  },
  ImageContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: "50%",
    borderRadius: 5,
    bottom: "10%",
    marginTop: 10,
  },
  DateTimeContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: "31%",
    borderRadius: 5,
    bottom: "11%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  LabelText: {
    fontFamily: "Courier New",
    fontWeight: "bold",
    fontSize: 20,
  },
  TitleCategoryBox: {
    backgroundColor: "#FFF",
    width: "94%",
    height: "55%",
    bottom: "45%",
    borderWidth: 4,
    borderColor: "#E5E0FF",
    alignContent: "center",
    justifyContent: "center",
    left: "3%",
  },
  ImageBox: {
    backgroundColor: "#FFF",
    width: "94%",
    height: "83%",
    bottom: "9%",
    alignItems: "center",
    justifyContent: "center",
    left: "3%",
  },
});

export default postStyle;
