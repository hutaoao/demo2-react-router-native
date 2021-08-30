import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from "react-native";

const TransitionAnimation = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log(1)
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();

    return () => {
      console.log(2)
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0
      }).start();
    }
  })

  console.log(3)
  return (
    <View style={styles.fadingContainer}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >
        {props.children}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  fadingContainer: {
    flex: 1,
  }
});

export default TransitionAnimation;
