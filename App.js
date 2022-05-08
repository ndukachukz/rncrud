/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import AppStore from './src/store/AppStore';
import Users from './src/Pages/Users.js';

const App = () => {
  return (
    <SafeAreaView>
      <AppStore>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Users />
        </ScrollView>
      </AppStore>
    </SafeAreaView>
  );
};

export default App;
