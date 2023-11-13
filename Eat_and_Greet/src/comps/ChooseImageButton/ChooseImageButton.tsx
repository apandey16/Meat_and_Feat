import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

interface ChooseImageProps {
  onPress?: () => void;
  buttonSize: number;
  imagePath?: string;
  color?: string;
}

const ChooseImageButton = (props: ChooseImageProps) => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        if (result.assets[0]) {
          console.log("worked apparently");
          setImage(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  useEffect(() => {
    if (image) {
      console.log("Chosen Image URI (in useEffect):", image);
    }
  }, [image]);

  const variablestyles = StyleSheet.create({
    outerSizing: {
      borderRadius: props.buttonSize,
      height: props.buttonSize,
      width: props.buttonSize,
      justifyContent: "center",
    },
    innerSizing: {
      position: "relative",
      maxHeight: props.buttonSize - props.buttonSize / 4,
      width: props.buttonSize - props.buttonSize / 4,
      borderRadius: props.buttonSize - props.buttonSize / 4,
    },
    coloring: {
      backgroundColor: props.color,
    },
    innerLining: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      maxHeight: 60,
      borderRadius: 50,
      alignSelf: "center",
    },
  });
  return (
    <View
      style={[
        variablestyles.outerSizing,
        variablestyles.coloring,
        { position: "relative" },
      ]}
    >
      <View style={variablestyles.innerLining}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={variablestyles.innerSizing}
            source={require("../../../assets/images/placeholder.png")}
            resizeMode="contain"
            onError={(error) => console.error("Image Load Error:", error)}
          ></Image>
          {image && (
            <Image
              style={variablestyles.innerSizing}
              source={{ uri: image }}
              resizeMode="contain"
              onError={(error) => console.error("Image Load Error:", error)}
            ></Image>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const defaultProps: ChooseImageProps = {
  buttonSize: 50,
  imagePath: "../../../assets/images/uploadImage.png",
  color: "#E5E0FF",
};

ChooseImageButton.defaultProps = defaultProps;

export default ChooseImageButton;
