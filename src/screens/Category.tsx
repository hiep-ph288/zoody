import { StyleSheet, Text, View, ImageSourcePropType, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Stack } from 'native-base';
import Header from '../components/Header';
import MemberItem, { MemberItemProps } from '../components/MemberItem';

const data: MemberItemProps[] = [
  { image: require("../../assets/images/tiger-item.png"), name: 'Tiger' },
  { image: require("../../assets/images/lion-item.png"), name: 'Lion' },
  { image: require("../../assets/images/zebra-item.png"), name: 'Zebra' },
  { image: require("../../assets/images/elephants-item.png"), name: 'Elephant' },
  { image: require("../../assets/images/goat-item.png"), name: 'Goat' },
  { image: require("../../assets/images/fox-item.png"), name: 'Fox' },
  { image: require("../../assets/images/wolf-item.png"), name: 'Wolf' },
  { image: require("../../assets/images/camel-item.png"), name: 'Camel' },
  { image: require("../../assets/images/monkey-item.png"), name: 'Monkey' },

  { image: require("../../assets/images/tiger-item.png"), name: 'Tiger' },
  { image: require("../../assets/images/lion-item.png"), name: 'Lion' },
  { image: require("../../assets/images/zebra-item.png"), name: 'Zebra' },
  { image: require("../../assets/images/elephants-item.png"), name: 'Elephant' },
  { image: require("../../assets/images/goat-item.png"), name: 'Goat' },
  { image: require("../../assets/images/fox-item.png"), name: 'Fox' },
  { image: require("../../assets/images/wolf-item.png"), name: 'Wolf' },
  { image: require("../../assets/images/camel-item.png"), name: 'Camel' },
  { image: require("../../assets/images/monkey-item.png"), name: 'Monkey' },
];

export default function Category() {
  return (
    <Stack>
      <Header title='MAMMALS' />
      <ScrollView>
        <Category />
        <View style={{ flexDirection: 'row', width: '95%', marginHorizontal: '2.5%', flexWrap: 'wrap', marginTop: 30 }}>
          {data.map(info => (
            <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
              <MemberItem {...info} />
            </View>))}
        </View>

        <View style={{ width: '100%', alignItems: 'center', marginTop: 20, marginBottom: 50 }}>
          <TouchableOpacity style={{ backgroundColor: '#3D7944', width: 280, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
            <Text style={{ color: 'white', marginHorizontal: 10 }}>Xem thêm</Text>
            <ImageBackground source={require('../../assets/images/plus.png')} style={{ width: 10, height: 10 }} />
          </TouchableOpacity>
        </View>

        <View>
          <ImageBackground
            source={require('../../assets/images/footerLeft.png')}
            style={{ width: 50, height: 50, position: 'absolute', bottom: -20 }}
          />

          <ImageBackground
            source={require('../../assets/images/footerRight.png')}
            style={{ width: 200, height: 200, position: 'absolute', bottom: -90, right: 0, zIndex: -1 }}
          />
        </View>
      </ScrollView>
    </Stack>
  )
}

const styles = StyleSheet.create({})