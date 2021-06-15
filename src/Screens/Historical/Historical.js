import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { connect } from 'react-redux';

const Historical = ({ navigation, calculatorItems }) => {
  console.log(calculatorItems);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 0.2, backgroundColor: '#f4f4f4' }}>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            padding: 35,
            color: '#0073b1',
            fontWeight: 'bold',
          }}
        >
          Report
        </Text>
        <Button
          labelStyle={{ fontSize: 35 }}
          style={{
            width: 175,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0073b1',
          }}
          icon='calculator'
          mode='contained'
          onPress={() => navigation.navigate('Calculator')}
        >
          <Text style={{ fontSize: 13 }}>Calculator</Text>
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'red',
          flex: 1,
        }}
      >
        <ScrollView>
          <View style={{ flex: 1, margin: 35, flexDirection: 'column' }}>
            {calculatorItems.length > 0
              ? calculatorItems.map((item, index) => (
                  <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Text
                      style={{
                        backgroundColor: '#009821',
                        width: 65,
                        height: 65,
                        fontSize: 40,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                      }}
                    >
                      {index + 1}
                    </Text>
                    <Text
                      style={{
                        backgroundColor: 'white',
                        height: 65,
                        width: '80%',
                        borderWidth: 2,
                        borderColor: 'gray',
                        textAlign: 'center',
                        paddingTop: 20,
                        color: 'gray',
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                ))
              : null}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = ({ calculatorItems }) => ({
  calculatorItems,
});

export default connect(mapStateToProps, null)(Historical);
