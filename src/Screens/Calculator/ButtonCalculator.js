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
  children,
}) => {
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
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
