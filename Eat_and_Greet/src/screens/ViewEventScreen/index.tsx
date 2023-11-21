import React, { useEffect, useState } from "react";
import { Image, View, Text, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import Event from "../../logic/event";
import eventManager from "../../logic/eventManager";
import  createDefaultPostData from "../../logic/Factory";

import styles from '../../style';
import localstyles from './style';

const postData = createDefaultPostData();



function ViewEventScreen() {

  const route = useRoute();
  const id : number = route.params?.id;
  const canJoin : boolean = route.params?.canJoin;

  const [data, setData] = useState(postData);

 const eventController = new eventManager("All");

 const dataSetter = async () => {
   const dataList : Event[] = await eventController.fetchData("View Events", id.toString());
   setData(dataList[0]);
  }

  useEffect(() => {
    dataSetter();
  }, []);

    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <View style={localstyles.outerContainer}>
            <View style={localstyles.innerContainer}>
              <View style={localstyles.eventNameContainerStyling}>
                <Text style={localstyles.eventNameTextStyling}> {data?.Title} </Text>
              </View>
              <View style={localstyles.imageContainerStyling}>
                <View style={localstyles.imageStyling}>
                  <Image style={localstyles.pngStyling}source={require('../../../assets/images/uploadImage.png')}/>
                </View>
              </View>
              <View style={localstyles.descriptionContainerStyling}>
                <Text style={localstyles.descriptionTextStyling}>Date: {eventController.toDateTime(data?.Date.seconds).toDateString()} </Text>
                <Text style={localstyles.descriptionTextStyling}>Time: {data?.StartTime} - {data?.EndTime} </Text>
                <Text style={localstyles.descriptionTextStyling}>Host Name: {data?.Host} </Text>
                <Text style={localstyles.descriptionTextStyling}>Spots Filled: {(data?.participants??[]).length}/{data?.spots} </Text>
                <Text style={localstyles.descriptionTextStyling}>Description: {data?.description} </Text>
              </View>
            </View>
          </View>
        {canJoin ?
        <RoundedButton 
          name='Join Event' 
          width={'80%'}
          onPress={() => eventController.handleJoin(data, id)}/> : 
        <RoundedButton 
          name='Event Chat' 
          width={'80%'}
          onPress={() => Alert.alert("Redirect to event chat")}/>}
        </View>
        <Toolbar />
      </View>
    );
}

export default ViewEventScreen;