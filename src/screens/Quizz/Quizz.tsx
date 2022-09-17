import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import { Image, Stack } from 'native-base'
import React, { useState } from "react";
import { color } from 'native-base/lib/typescript/theme/styled-system'
import TextBox,  { EStatus } from '../../components/TextBox'

const questions = [
  "Côn trùng",
  "Động vật có vú",
  "Động vật đẻ trứng"
]

const Quizz = () => {
  const [status, setStatus] = useState<EStatus[]>([EStatus.IN_CORRECT, EStatus.DISABLE, EStatus.CORRECT])
  const onPress = (i: number) => () => {
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.NORMAL;
    }
    newStatus[i] = EStatus.DISABLE;
    setStatus(newStatus)
  }
  return (
    <Stack style={{height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text_main}>ZOODY'S QUIZ</Text>
        <Text style={styles.text_level}>Mức độ: Dễ</Text>
        <Image style={{width: '80%', height: "30%"}} source={require('../../../assets/images/dolphin.png')}/>
        <Text style={styles.text_ques}>Câu 1: Cá heo thuộc loại động vật nào?</Text>
      </View>
      <View style={{
        width: 200, height: 400, backgroundColor: 'red'
      }}>
      {questions.map((ques, i) => <TextBox key={ques} status={status[i]} onPress={onPress(i)} content={ques} />)}
      </View>
      <Image
          source={require("../../../assets/images/quiz-bg.png")}
          width='100%'
          alt="quiz-bg"
          position="absolute"
          resizeMode="stretch"
          bottom= "0"
      />
    </Stack>

  )
}

export default Quizz

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  text_main:{
    color: '#A1783F',
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  text_level:{
    color: '#3D7944',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text_ques: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '700',
    color: '#757575'
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