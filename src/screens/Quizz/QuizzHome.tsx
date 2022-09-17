import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import { Image, Stack } from 'native-base'
import React from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system'

const QuizzHome = () => {
  return (
    <Stack style={{height: '100%'}}>
      <Image
          source={require("../../../assets/images/quiz1-bg.png")}
          width='40%'
          alt="quiz-bg"
          position="absolute"
          resizeMode="stretch"
          top='0'
          right='0'
        />
      <View style={styles.container}>
        <Text style={styles.textmain}>ZOODY'S QUIZ</Text>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Dễ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Trung bình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Khó</Text>
        </TouchableOpacity>
      </View>
      <Image
          source={require("../../../assets/images/quiz2-bg.png")}
          width='100%'
          alt="quiz-bg"
          position="absolute"
          resizeMode="stretch"
          bottom= "0"
      />
    </Stack>

  )
}

export default QuizzHome

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textmain:{
    color: '#A1783F',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  box: {
    width: '70%',
    height: 41,
    backgroundColor: "#3D7944",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  text: {
    color: '#FFFFFF'
  }
})