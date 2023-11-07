import React, { useEffect, useState } from "react";
import { Image, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Toolbar } from '../../comps/Toolbar/toolbar';
import { db } from "../../firebase/config";
import { getDoc, doc } from "firebase/firestore";
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import styles from '../../style';
import localstyles from './style';

interface EventData {
  Category: string;
  Date: string;
  EndTime: string;
  Host: string;
  StartTime: string;
  Title: string;
  id: number;
}

const postData = [
  {
    Category: "",
    Date: "",
    EndTime: "",
    Host: "",
    StartTime: "",
    Title: "Loading Events Now",
    id: -1
  },
];

const getEventData = async (uid : string): Promise<EventData[]> => {
  try {
    const docSnapshot = await getDoc(doc(db, "Events", uid));
    let fetchedEventData: EventData[] = [];
    fetchedEventData.push(docSnapshot.data() as EventData);
    return fetchedEventData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

function ViewEventScreen() {

  const route = useRoute();
  const id : number = route.params?.id;

  const [data, setData] = useState(postData);

  const fetchData = async () => {
    try {
      const data = await getEventData(id.toString());
      setData(data);
    } catch (error) {
      console.error("Error in Fetching Data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <View style={localstyles.outerContainer}>
            <View style={localstyles.innerContainer}>
              <View style={localstyles.eventNameContainerStyling}>
                <Text style={localstyles.eventNameTextStyling}> {data[0]?.Title} </Text>
              </View>
              <View style={localstyles.imageContainerStyling}>
                <View style={localstyles.imageStyling}>
                  {/* Eventually will want to switch this to a box that an image will fill, no clue how to do that */}
                  <Image style={localstyles.pngStyling}source={require('../../../assets/images/uploadImage.png')}/>
                </View>
              </View>
              <View style={localstyles.descriptionContainerStyling}>
                <Text style={localstyles.descriptionTextStyling}>Date: {data[0]?.Date} </Text>
                <Text style={localstyles.descriptionTextStyling}>Time: {data[0]?.StartTime} - {data[0]?.EndTime} </Text>

                <Text style={localstyles.descriptionTextStyling}>Host Name: {data[0]?.Host} </Text>
                <Text style={localstyles.descriptionTextStyling}>Spots Filled: 1/4 </Text>
                <Text style={localstyles.descriptionTextStyling}>Description: This is Cameron's Birthday Party please attend it!! </Text>
              </View>
            </View>
          </View>
        <RoundedButton name='Join Event' width={'80%'}/>
        </View>
        <Toolbar />
      </View>
    );
}

export default ViewEventScreen;