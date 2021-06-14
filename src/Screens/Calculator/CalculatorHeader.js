import React from 'react';
import { Avatar } from 'react-native-paper';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export const CalculatorHeader = ({ navigation }) => {
  return (
    <View style={{ flex: 0.3, backgroundColor: '#f4f4f4', zIndex: 9999 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginLeft: 25,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Avatar.Icon
            color={'black'}
            style={{ backgroundColor: '#f4f4f4', marginRight: 30 }}
            size={60}
            icon='arrow-left-drop-circle-outline'
          />
        </TouchableOpacity>
        <Image source={require('../../../assets/logoGeko.png')} />
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ color: '#009821' }}>Calculator</Text>
      </View>
    </View>
  );
};
