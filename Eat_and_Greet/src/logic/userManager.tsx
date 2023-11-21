import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default class userManager{

    constructor(){};

    getUser = async () : Promise<string> => {
        try{
          const querySnapshot = await getDocs(
            query(
              collection(db, "Users"),
              where("email", "==", this.getEmail())
            )
          );
          let fullName = "";
          querySnapshot.forEach((doc) => {
            const first = doc.data().firstName as string;
            const last = doc.data().lastName as string;
            fullName = (first.concat(" ", last));
          });
          return fullName;
        } catch (error) {
          console.error("Error Getting Data From DB: ", error);
          return "";
        }
      }

    getEmail = () => {
        return getAuth().currentUser?.email
    }
}
