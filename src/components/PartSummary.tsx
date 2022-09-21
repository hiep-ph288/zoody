import { View, Text, StyleSheet, ImageBackground, ImageSourcePropType } from "react-native";
import React from "react";

export interface PartSummaryProps {
  image: ImageSourcePropType,
  title: string,
  summary: string,
  icon: ImageSourcePropType,
}

export default function PartSummary(props: PartSummaryProps) {
  const {image, title, summary, icon} = props;
  return (
    <View style={{
      width: '100%',
      height: 200,
      borderRadius: 10,
      backgroundColor:  '#3D7944',
      flexDirection: 'row',
      marginVertical: 10,
    }}>
      <ImageBackground 
        source={image}
        style={{
          width: 195,
          height: '100%',
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '55%', marginLeft: 15, marginRight: 5}}>
          <Text style={{color:'white', fontSize: 20, fontWeight: '700', marginTop: 25, marginBottom: 15,}}>{title}</Text>
          <Text style={{color:'white', fontSize: 14}}>{summary}</Text>  
        </View> 
        <ImageBackground 
        source={icon}
        style={{
          width: 10,
          height: 20,
          marginTop: 90,
        }}
      />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({})
