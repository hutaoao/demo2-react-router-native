import React from 'react';
import {Button, Text, View} from "react-native";

const Mine = ({history}) => {
  console.log('mine');
  return (
    <View>
      <View>
        <Text style={{fontSize: 30, marginBottom: 20}}>我的</Text>
      </View>
      <Button
        title={'跳转子节点'}
        onPress={() => {
          history.push('child')
        }}
      />
    </View>
  )
}

export default Mine;
