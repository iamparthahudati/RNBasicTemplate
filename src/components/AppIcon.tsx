import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { IconName, Icons } from '../assets';

interface Props {
  name: IconName;
  size?: number;
  color?: string; // future-proof (for SVG later)
  style?: StyleProp<ImageStyle>;
}

const AppIcon: React.FC<Props> = ({ name, size = 24, style }) => {
  return (
    <Image
      source={Icons[name]}
      style={[
        {
          width: size,
          height: size,
          resizeMode: 'contain',
        },
        style,
      ]}
    />
  );
};

export default AppIcon;
