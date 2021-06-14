import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

export const ButtonCalculator = ({
  color,
  width,
  height,
  textAlign,
  fontSize,
  borderWidth = 0,
  paddingTop = 0,
  borderColor = '',
  backgroundColor = '',
  update,
  borderRadius = 0,
  children,
}) => {
  console.log(borderRadius);
  return (
    <TouchableOpacity onPress={() => update(children)}>
      <Text
        style={{
          backgroundColor,
          color,
          width,
          height,
          textAlign,
          fontSize,
          borderWidth,
          paddingTop,
          borderColor,
          borderRadius,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
