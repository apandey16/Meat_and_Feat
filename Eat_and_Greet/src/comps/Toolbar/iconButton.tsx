import React from "react";
import { Image, TouchableOpacity } from 'react-native';
import styles from './style';

type IconButtonProps = {
  onPress: () => void;
  icon: any;
};

const IconButton = ({onPress, icon }: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.iconSize} activeOpacity={0.5} onPress={onPress}>
      <Image
        source={icon}
        style={styles.iconSize}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
  