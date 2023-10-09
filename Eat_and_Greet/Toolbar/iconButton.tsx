import React from "react";
import { Image, TouchableOpacity, StyleSheet} from 'react-native';

type IconButtonProps = {
  icon: any;
};

const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <TouchableOpacity style={iconButtonStyles.iconSize} activeOpacity={0.5}>
      <Image
        source={icon}
        style={iconButtonStyles.iconSize}
      />
    </TouchableOpacity>
  );
};

const iconButtonStyles = StyleSheet.create({
  iconSize: {
    width: 45,
    height: 45,
    flexShrink: 0,
    margin: 4,
  },
});

export { IconButton };
  export default IconButton;

  const styles = StyleSheet.create({
    iconSize: {
      width: 45,
      height: 45,
      flexShrink: 0,
      margin: 4,
    },
  });
  