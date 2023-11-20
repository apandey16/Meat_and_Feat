import React, { useState, useCallback} from "react";
import { Text, View, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EventData, toDateTime } from "../../logic/eventDataInterface";

import browseStyle from "../../screens/BrowseEvents/index.styles";

interface ScrollEventProps {
    inputData : EventData[];
    canJoin : boolean;
    currentPage : string;
    refreshParameters: any;
  }

const ScrollEvents = ({ inputData, canJoin, currentPage, refreshParameters}: ScrollEventProps) => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      navigation.goBack();
      navigation.navigate(currentPage, refreshParameters);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>
        }>
            {inputData.map((postObj) => (
              
                <View
                  style={browseStyle.PostContainer}
                  key={postObj.Title + postObj.Date + postObj.StartTime}
                >
                  <TouchableOpacity onPress={() => navigation.navigate('View Event', { id : postObj.id, canJoin : canJoin })}>
                  <Text style={browseStyle.PostText}>
                    {postObj.Title}
                    {"\n"}
                    {toDateTime(postObj.Date.seconds).toDateString()}
                    {"\n"}
                    {postObj.StartTime} - {postObj.EndTime}
                    {"\n"}{postObj.spots - postObj.participants.length} Spots Left
                  </Text>
                  </TouchableOpacity>
                </View>
              
            ))}
        </ScrollView>
    );
};

export default ScrollEvents;