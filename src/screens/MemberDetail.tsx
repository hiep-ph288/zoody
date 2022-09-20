import { View, Text, StyleSheet, Dimensions, ImageSourcePropType, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import MemberImage, { MemberImageProps } from "../components/MemberImage";
import { HStack, Box, Stack } from 'native-base';
import Slide from '../components/Slide';
import { memberDetailData } from '../db/memberdetail';

// export interface MemberDetailProps {
//   icon: ImageSourcePropType,
//   text: string,
// }

export default function MemberDetail() {
  // const {icon,text} = props;
  return (
    <View>
      <Slide data={memberDetailData["zebra"]["slide"]}/>
      <View style={{ width: '90%', marginHorizontal: '5%' }}>
        <Text style={{ marginBottom: 20, fontSize: 16, fontWeight: '600' }}>
          Physical characteristic
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <ImageBackground source={require('../../assets/images/weight.png')} style={{ width: 30, height: 30 }} />
            <Text>90 - 310 kg</Text>
          </View>

          <View>
            <ImageBackground source={require('../../assets/images/lenght.png')} style={{ width: 30, height: 30 }} />
            <Text>2,5 – 3,9 m</Text>
          </View>

          <View>
            <ImageBackground source={require('../../assets/images/time.png')} style={{ width: 30, height: 30 }} />
            <Text>8 – 10 years</Text>
          </View>

          <View>
            <ImageBackground source={require('../../assets/images/Group.png')} style={{ width: 30, height: 30 }} />
            <Text>96 km/h</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight:'700'}}>Climate zones: <Text style={{fontWeight: 'normal'}}>Tropical temperate</Text></Text>
        </View>

        <View style={{}}>
          <Text style={{fontWeight:'700'}}>Biome: <Text style={{fontWeight: 'normal'}}>Forest, rainforest, montane forest, riparian, shrubland, grass land</Text></Text>
          {/* <Text></Text> */}
        </View>

        <View>
          <Text>Fact</Text>
          <View style={{marginLeft: 15}}>
            <Text>
              The tiger is the national animal of India, Bangladesh, Malaysia, and South Korea.
            </Text>

            <Text>
              Did you know that a tiger's coat pattern is still visible when it is shaved. This is not due to skin pigmentation but to the stubble and hair follicles embedded in the skin.
            </Text>

            <Text>
              Tigers can cross rivers up to 7 km (4.3 mi) wide and can swim up to 29 km (18 mi) in a day.
            </Text>

            <Text>
              When tense, tigers will moan; this sound is similar to a roar but more subdued and made when the mouth is partially or completely closed. Their moaning can be heard 400 m (1,300 ft) away!
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})