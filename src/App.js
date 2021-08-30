import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NativeRouter, Route, Switch} from 'react-router-native';

import Entry from './pages/entry';
import Home from './pages/Home';
import Order from './pages/Order';
import Mine from './pages/Mine';
import Child from './pages/Mine/Child';
// import TransitionAnimation from "./components/TransitionAnimation";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <Switch>
          {/*<TransitionAnimation>*/}
          <Route path="/child" component={Child} />
          <Entry>
            <Route exact path="/" component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/mine" component={Mine} />
          </Entry>
          {/*</TransitionAnimation>*/}
        </Switch>
      </NativeRouter>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fadingContainer: {
    flex: 1,
  },
});

export default App;
