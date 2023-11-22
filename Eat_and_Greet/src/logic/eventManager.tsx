import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Event from "./event";
import createDefaultPostData from "./Factory";

import { db } from "../firebase/config";
import { collection, getDocs, query, where, getDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import UserManager from "./UserManager";

export default class EventManager{

    forumName : string;
    navigation = useNavigation();
    inputsAsString = ["Title", "Event Date", "Start Time", "End Time", "Description"];
    user = getAuth().currentUser?.email;
    userController = new UserManager();
    userName = "";

    getHost = async() => {
      this.userName = await this.userController.getUser();
    }

    constructor(forumName : string){
        this.forumName = forumName;
    };
    
    getForumEventsData = async (forum: string): Promise<Event[]> => {
        try {
        let upcomingEvents = null;
        if(forum == "All Events"){
            upcomingEvents  = query(collection(db, "Events"), where("Date", ">=", new Date()));

        }else{
            upcomingEvents  = query(collection(db, "Events"), where("Date", ">=", new Date()), where("Category", "==", forum));
        }
          const docRef = await getDocs(upcomingEvents);
          let fetchedEventData: Event[] = [];
          docRef.forEach((doc) => {
            fetchedEventData.push(doc.data() as Event);
          });
          return fetchedEventData;
        } catch (error) {
          console.error("Error Getting Data From DB: ", error);
          return [];
        }
      };


    getUserEventsData = async (): Promise<Event[]> => {
    try {
    const user = getAuth().currentUser;
        const ownedEvents  = query(collection(db, "Events"), where("participants","array-contains", user?.email), where("Date", ">=", new Date()));
        const docRef = await getDocs(ownedEvents);
        let fetchedEventData: Event[] = [];
        docRef.forEach((doc) => {
        fetchedEventData.push(doc.data() as Event);
        });
        if(fetchedEventData.length == 0){
        Alert.alert("You Have No Joined Events");
        this.navigation.goBack();
        }
        return fetchedEventData;
    } catch (error) {
        console.error("Error Getting Data From DB: ", error);
        return [];
    }
    };

    getUserPastEventsData = async (host : boolean): Promise<Event[]> => {
        try {
            this.getHost();
            const ownedEvents  = query(collection(db, "Events"), where("participants","array-contains", this.user), where("Date", "<", new Date()));
            const docRef = await getDocs(ownedEvents);
            let fetchedEventData: Event[] = [];
            if(host){
                docRef.forEach((doc) => {
                    if(doc.data().Host == this.userName){
                        fetchedEventData.push(doc.data() as Event);
                    }
                    });
            }else{
                docRef.forEach((doc) => {
                    if(doc.data().Host != this.userName){
                        fetchedEventData.push(doc.data() as Event);
                    }
                    });
            }
            if(fetchedEventData.length == 0){
                return [];
            }
            return fetchedEventData;
        } catch (error) {
            console.error("Error Getting Data From DB: ", error);
            return [];
        }
        };

    getEventDataById = async (uid : string): Promise<Event> => {
    try {
        const docSnapshot = await getDoc(doc(db, "Events", uid));
        let fetchedEventData: Event = docSnapshot.data() as Event;
        return fetchedEventData;
    } catch (error) {
        console.error("Error Getting Data From DB: ", error);
        return createDefaultPostData();
    }
    };

    handleJoin = async (data : Event, id : number) => {

        if(this.user != null && !data?.parameter.participants.includes(this.user)){
    
          if(data?.parameter.spots > data?.parameter.participants.length) {
            let participants = data?.parameter.participants;
            participants.push(this.user);
    
            try {   
              await updateDoc(doc(db, "Events", id.toString()),  { participants: participants });
              Alert.alert("Event Joined Successfully!");
              this.navigation.goBack();
    
          } catch (error) {
            console.error("Error adding document: ", error);
            Alert.alert("There Was An Issue Joining This Event, Please Try Again Later")
          }
    
          }else{
            Alert.alert("This Event Is Already Full!");
            this.navigation.goBack();
          }
        }else{
          Alert.alert("User Is Already Enrolled In This Event");
          this.navigation.goBack();
        }
     }


    fetchData = async (page : string, uid ?: string) => {
    try {
    let data = [];
    if(page == "Browse Event"){
            data = await this.getForumEventsData(this.forumName);
    }
    else if(page == "My Events"){
        data = await this.getUserEventsData();
    }else if(page == "View Events"){
        data = [await this.getEventDataById(uid)];
    }else if(page == "Attended Events"){
        data = await this.getUserPastEventsData(false);
    }else if(page == "Hosted Events"){
        data = await this.getUserPastEventsData(true);
    }
        return data;
    } catch (error) {
        console.error("Error in Fetching Data: ", error);
        return [];
    }
    };

    getNumberOfEventsData = async (numberOfEventsSnapshot : QuerySnapshot): Promise<number> => {
        try {
          let fetchedEventData: number = -1;
          numberOfEventsSnapshot.forEach((doc) => {
            fetchedEventData = (doc.data().numberOfEvents as number);
          });
          return fetchedEventData;
        } catch (error) {
          console.error("Error Getting Data From DB: ", error);
          return -1;
        }
      };
    
      addPostToDB = async (inputs : any) => {
        let missing = new Array();
        for (let i = 0; i < inputs.length; i++){
          if(inputs[i].length <= 0){
            missing.push(this.inputsAsString[i])
          }
        }
        if (missing.length == 0) {
          try {
            const querySnapshot = await getDocs(
              query(
                collection(db, "Events"),
                where("Title", "==", inputs.title),
                where("Category", "==", inputs.forumName),
                where("Date", "==", inputs.dateOfEvent)
              )
            );
    
            if (!querySnapshot.empty) {
              Alert.alert("This Event is Already Happening Today");
            } else {
              const numberOfEventsSnapshot = await getDocs(collection(db, "Number of Events"));
              let uid : number = await this.getNumberOfEventsData(numberOfEventsSnapshot) + 1;
              await setDoc(doc(db, "Events", uid.toString()), {
                Category: inputs.forumName,
                Date: inputs.dateOfEvent,
                EndTime: inputs.endTime.toTimeString().split(' ')[0],
                Host: this.userName,
                StartTime: inputs.startTime.toTimeString().split(' ')[0],
                Title: inputs.title,
                id: uid,
                description: inputs.description,
                spots: inputs.spots,
                participants: [this.user]
              });
              await updateDoc(doc(db, "Number of Events", "Counter"),  { numberOfEvents: uid });
              Alert.alert("Post Successfully Added!");
              this.navigation.goBack();
            }
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        } else {
          Alert.alert("Event Posting Is Missing The Following Data: " + missing.toString());
        }
      };


    toDateTime(secs : number) {
        const t = new Date(1970, 0, 1); 
        t.setSeconds(secs);
        return t;
    }
}