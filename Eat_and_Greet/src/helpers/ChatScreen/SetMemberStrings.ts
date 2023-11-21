import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

import UserStringType from "../../types/UserStringType";

const FetchData = async (members: any, setMemberStrings: any) => {
  try {
    const memberIDStrings: string[] = [];
    for (let i = 0; i < members.length; i++) {
      memberIDStrings.push(members[i].id.toString());
    }

    const userDocs = await getDocs(collection(db, "Users"));
    const memberStrings: UserStringType[] = [];
    userDocs.forEach((doc) => {
      const docData = doc.data();
      if (memberIDStrings.includes(docData.uid)) {
        const memberName = docData.firstName + " " + docData.lastName;
        const userString: UserStringType = {
          Id: docData.uid,
          Name: memberName,
        };
        memberStrings.push(userString);
      }
    });
    setMemberStrings(memberStrings);
  } catch (error) {
    console.error("Error in Fetching Data: ", error);
  }
};

export default FetchData;
