import React from 'react';

import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./style";
import IconButton from "./iconButton";

const imgPath = "../../../assets/toolbar/";

const Images = {
  home: [
    require(imgPath + "white/home.png"),
    require(imgPath + "black/home.png"),
  ],
  forum: [
    require(imgPath + "white/forum.png"),
    require(imgPath + "black/forum.png"),
  ],
  profile: [
    require(imgPath + "white/profile.png"),
    require(imgPath + "black/profile.png"),
  ],
  search: [
    require(imgPath + "white/search.png"),
    require(imgPath + "black/search.png"),
  ],
  settings: [
    require(imgPath + "white/settings.png"),
    require(imgPath + "black/settings.png"),
  ],
};

export function Toolbar() {
  const navigation = useNavigation();

  const route = useRoute();

  const homeImg =
    route.name === "Home" ? Images.home[0] : Images.home[1];

  const forumImg =
    route.name === "Forums" ? Images.forum[0] : Images.forum[1];

  const profileImg =
    route.name === "Profile" ? Images.profile[0] : Images.profile[1];

  const searchImg =
    route.name === "Search" ? Images.search[0] : Images.search[1];

  const settingsImg =
    route.name === "Settings" ? Images.settings[0] : Images.settings[1];

  return (
    <View style={styles.root}>
      <View style={styles.background} />
      <IconButton icon={homeImg} onPress={() => navigation.navigate("Home")} />
      <IconButton
        icon={forumImg}
        onPress={() => navigation.navigate("Forums")}
      />
      <IconButton
        icon={searchImg}
        onPress={() => navigation.navigate("Search")}
      />
      <IconButton
        icon={profileImg}
        onPress={() => navigation.navigate("Profile")}
      />
      <IconButton
        icon={settingsImg}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
