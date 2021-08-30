import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {Link} from "react-router-native";

const home_on = require('../assets/home_on.png');
const home_out = require('../assets/home_out.png');
const order_on = require('../assets/order_on.png');
const order_out = require('../assets/order_out.png');
const user_on = require('../assets/user_on.png');
const user_out = require('../assets/user_out.png');

const Routes = [
  {
    key: '1',
    path: '/',
    active: true,
    navName: '首页',
    iconOn: home_on,
    iconOut: home_out,
  },
  {
    key: '2',
    path: '/order',
    navName: '我的工单',
    iconOn: order_on,
    iconOut: order_out,
  },
  {
    key: '3',
    path: '/mine',
    navName: '我的',
    iconOn: user_on,
    iconOut: user_out,
  },
]

const entry = (props) => {
  const [routes, setRoutes] = useState(Routes);

  const checkNative = (item) => {
    let newRoutes = [...routes];
    newRoutes.forEach(i => {
      i.active = i.key === item.key;
    })
    setRoutes(newRoutes);
  }

  return (
    <View style={styles.container}>
      <View style={styles.count}>
        {props.children}
      </View>
      <View style={styles.nav}>
        {
          routes.map(item => {
            return (
              <Link
                to={item.path}
                key={item.key}
                style={styles.navLink}
                underlayColor="#f0f4f7"
                onPress={checkNative.bind(this, item)}
              >
                <View style={styles.navItem}>
                  <Image source={item.active ? item.iconOn : item.iconOut} style={styles.icon}/>
                  <Text style={item.active ? styles.active : styles.text}>{item.navName}</Text>
                </View>
              </Link>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  count: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: "#eeeeee",
    borderTopWidth: 1,
  },
  navLink: {
    flex: 1,
  },
  navItem: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    color: "#333333"
  },
  active: {
    color: "#387dfc"
  }
});

export default entry;
