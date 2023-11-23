import { Alert } from "react-native";
import { db } from "../firebase/config";
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default class UserManager{
    user = getAuth().currentUser?.email;

    getEmail = () => {
        return getAuth().currentUser?.email
    }

    getUser = async (userEmail : string) : Promise<string> => {
        try{
          const querySnapshot = await getDocs(
            query(
              collection(db, "Users"),
              where("email", "==", userEmail)
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

      getDescription = async (userEmail : string) : Promise<string> => {
        try{
          const querySnapshot = await getDocs(
            query(
              collection(db, "Users"),
              where("email", "==", userEmail)
            )
          );
          let description = "";
          querySnapshot.forEach((doc) => {
            description = doc.data().description as string;
          });
          return description;
        } catch (error) {
          console.error("Error Getting Data From DB: ", error);
          return "";
        }
      }

      getInterests = async (userEmail : string) : Promise<string[]> => {
        try{
          const querySnapshot = await getDocs(
            query(
              collection(db, "Users"),
              where("email", "==", userEmail)
            )
          );
          let interests : string[] = [];
          querySnapshot.forEach((doc) => {
            interests = doc.data().interests;
          });
          return interests;
        } catch (error) {
          console.error("Error Getting Data From DB: ", error);
          return [];
        }
      }
      addInterest = async(userEmail : string, interest : string) : Promise<void> => {

        try{
            const querySnapshot = await getDocs(
              query(
                collection(db, "Users"),
                where("email", "==", userEmail)
              )
            );
            let interests : string[] = [];
            let id = ""
            querySnapshot.forEach((doc) => {
              interests = doc.data().interests;
              id = doc.data().uid;
            });
            if(interests.includes(interest)){
                Alert.alert("That Is Already One Of Your Interests!")
            }else{
                try {  
                    interests.push(interest); 
                    await updateDoc(doc(db, "Users", id),  { interests: interests });
                    Alert.alert("Interest Added Successfully!");
                } catch (error) {
                  console.error("Error adding document: ", error);
                  Alert.alert("There Was An Issue Adding This Interest, Please Try Again Later")
                }
            }
          } catch (error) {
            console.error("Error Getting Data From DB: ", error);
          }
      } 

      removeInterest = async(userEmail : string, interestName : string) : Promise<void> => {
        try{
            const querySnapshot = await getDocs(
              query(
                collection(db, "Users"),
                where("email", "==", userEmail)
              )
            );
            let interests : string[] = [];
            let id = ""
            querySnapshot.forEach((doc) => {
              interests = doc.data().interests;
              id = doc.data().uid;
            });
            if(interests.includes(interestName)){
                const index = interests.indexOf(interestName);
                if (index > -1){
                    interests.splice(index, 1);
                }
                try {
                    await updateDoc(doc(db, "Users", id),  { interests: interests });
                    Alert.alert("Interest Removed Successfully!");
                }catch (error) {
                    console.error("Error adding document: ", error);
                    Alert.alert("There Was An Issue Adding This Interest, Please Try Again Later")
                }
            }else{
                Alert.alert("That Interest Does Not Exist");
            }
          } catch (error) {
            console.error("Error Getting Data From DB: ", error);
          }
      } 

      addDescription = async(userEmail : string, description : string) : Promise<void> => {
        try{
            const querySnapshot = await getDocs(
              query(
                collection(db, "Users"),
                where("email", "==", userEmail)
              )
            );
            let id = "";
            querySnapshot.forEach((doc) => {
              id = doc.data().uid;
            });
            try {  
                await updateDoc(doc(db, "Users", id),  { description: description });
            } catch (error) {
                console.error("Error adding document: ", error);
                Alert.alert("There Was An Issue Saving The Changes, Please Try Again Later")
            }
          } catch (error) {
            console.error("Error Getting Data From DB: ", error);
          }
      } 
}
