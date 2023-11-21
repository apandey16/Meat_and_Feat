import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const SetDMTitle = async (currentUser: any, memberList: any) => {
  let dmToUser = "";
  for (let i = 0; i < memberList.length; i++) {
    if (memberList[i].id.toString() != currentUser.id.toString()) {
      dmToUser = memberList[i].id.toString();
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
    return "DM";
  }
};

export default SetDMTitle;
