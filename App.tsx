/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  NativeModules,
} from 'react-native';

const { Close } = NativeModules;

function App() {
  function tester(){
    Close.sayClose('John Doe', (er: any, message: any) => {
      if(er){
        return console.log(`Error faced` , er);
      } else{
        Close.closeApp();
        console.log(message);
      }
    })
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <TouchableOpacity
        onPress={tester}
        >
          <Text>Close this app</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;
