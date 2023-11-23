import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const SetDMTitle = async (currentUserID: any, memberList: any) => {
  let dmToUser = "";
  for (const member of memberList) {
    if (member.id.toString() !== currentUserID) {
      dmToUser = member.id.toString();
      break;
    }
  }
  if (dmToUser != "") {
    const querySnapshot = await getDocs(
      query(collection(db, "Users"), where("uid", "==", dmToUser))
    );
    if (querySnapshot.docs[0]?.exists) {
      const newTitle = "DM to " + querySnapshot.docs[0].data().firstName;
      return newTitle;
    } else {
      console.log("ERROR LOADING TITLE");
      return "DM";
    }
  } else {
    return "Failed To Find Title";
  }
};

export default SetDMTitle;
