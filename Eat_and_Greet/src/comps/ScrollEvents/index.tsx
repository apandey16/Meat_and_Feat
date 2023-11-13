import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EventData } from "../../logic/eventDataInterface";

import browseStyle from "../../screens/BrowseEvents/index.styles";

interface ScrollEventProps {
    data : EventData[];
    canJoin : Boolean;
  }

const ScrollEvents = ({ data, canJoin } : ScrollEventProps) => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            {data.length > 0 ? data.map((postObj) => (
              
                <View
                  style={browseStyle.PostContainer}
                  key={postObj.Title + postObj.Date + postObj.StartTime}
                >
                  <TouchableOpacity onPress={() => navigation.navigate('View Event', { id : postObj.id, canJoin : canJoin })}>
                  <Text style={browseStyle.PostText}>
                    {postObj.Title}
                    {"\n"}
                    {postObj.Date}
                    {"\n"}
                    {postObj.StartTime} - {postObj.EndTime}
                    {"\n"}{postObj.spots-postObj.participants.length} Spots Left
                  </Text>
                  </TouchableOpacity>
                </View>
              
            )) : <View/>}
        </ScrollView>
    );
};

export default ScrollEvents;