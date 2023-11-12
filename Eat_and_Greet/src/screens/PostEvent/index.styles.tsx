import { StyleSheet, Dimensions } from "react-native";


const { height } = Dimensions.get('window');

const postStyle = StyleSheet.create({
  InfoContainer: {
    backgroundColor: "#8EA7E9",
    width: "87%",
    borderRadius: 10,
    justifyItems: "space-between",
    marginVertical: 10,
    paddingVertical: 10
  },
  TitleCategoryContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: 70,
    borderRadius: 5,
    marginTop: 10,
  },
  ImageContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: 300,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
    paddingBottom: 10
  },
  DateTimeContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    flex: 1
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
    borderWidth: 4,
    borderColor: "#E5E0FF",
    alignContent: "center",
    justifyContent: "center",
  },
  ImageBox: {
    backgroundColor: "#FFF",
    width: "94%",
    height: "83%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  DateContainer: {
    backgroundColor: "#FFF",
    height: "20%",
    width: "90%",
    justifyContent: "center",
    alignSelf: "center"
  },
  DescriptionContainer: {
    backgroundColor: "#E5E0FF",
    width: "95%",
    borderRadius: 5,
    justifyContent: "center",
    alignContent: "flex-start",
    marginTop: 15,
    padding: 10,
    flexDirection: "column",
    flexGrow: 1
    }
});

export default postStyle;
