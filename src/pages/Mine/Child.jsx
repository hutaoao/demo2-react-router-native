import React from 'react';
import {Button, Text, View, StyleSheet} from "react-native";

const Child = ({history}) => {
  return (
    <View style={styles.container}>
      <View style={styles.words}>
        <Text style={styles.text}>Child</Text>
      </View>
      <Button
        title={'返回'}
        onPress={() => {
          history.go(-1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  words: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  }
})

export default Child;
