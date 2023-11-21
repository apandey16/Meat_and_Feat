import { getAuth } from "firebase/auth";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const GetUser = async (setCurrentUser: any): Promise<void> => {
  try {
    let user = getAuth().currentUser;
    if (user == null) {
      setCurrentUser("User Not Found");
      return;
    }
    const querySnapshot = await getDocs(
      query(collection(db, "Users"), where("email", "==", user?.email))
    );
    if (querySnapshot.docs[0]?.exists) {
      setCurrentUser(querySnapshot.docs[0].ref);
    }
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    setCurrentUser("User Not Found");
  }
};

export default GetUser;
