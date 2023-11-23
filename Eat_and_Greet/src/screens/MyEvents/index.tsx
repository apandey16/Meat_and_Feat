import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";



import styles from "../../style";
import localstyles from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import ScrollEvents from "../../comps/ScrollEvents/index"

import createDefaultPostData from "../../logic/Factory";
import EventManager from "../../logic/EventManager";
import UserManager from "../../logic/UserManager";

export default function MyEvents() {
  const postData = [ createDefaultPostData() ];
  const userController = new UserManager();
  const email : string = userController.getEmail() ?? "";
  const [data, setData] = useState(postData);
  const eventController = new EventManager("All", email);

  const dataSetter = async () => {
    setData(await eventController.fetchData("My Events"))
   }

  useEffect(() => {
    dataSetter();
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      <View style={localstyles.InfoContainer}>
        <ScrollEvents inputData={data} canJoin={false} currentPage="My Events" refreshParameters={{}}></ScrollEvents>
      </View>
      <StatusBar style="auto" />
      <Toolbar />
    </View>
  );
}
