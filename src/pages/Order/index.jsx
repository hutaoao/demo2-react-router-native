import React, {useState} from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";

const DATA = [
  {
    id: "1",
    title: "对于MyListItem组件来说，其onPressItem属性使用箭头函数而非 bind 的方式进行绑定，使其不会在每次列表重新 render 时生成一个新的函数，从而保证了 props 的不变性（当然前提是 id、selected和title也没变），不会触发自身无谓的重新 render。换句话说，如果你是用 bind 来绑定onPressItem，每次都会生成一个新的函数，导致 props 在===比较时返回 false，从而触发自身的一次不必要的重新 render。",
  },
  {
    id: "2",
    title: "给FlatList指定extraData={this.state}属性，是为了保证state.selected变化时，能够正确触发FlatList的更新。如果不指定此属性，则FlatList不会触发更新，因为它是一个PureComponent，其 props 在===比较中没有变化则不会触发更新。",
  },
  {
    id: "3",
    title: "keyExtractor属性指定使用 id 作为列表每一项的 key。",
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const Order = () => {
  console.log('order');
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "#b492b4" : "#f2d1ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Order;
