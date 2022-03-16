
import React from 'react';
import {
  SafeAreaView, StatusBar
} from 'react-native';
import Home from './src/screens/Home';



const App = () => {
 

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
      <StatusBar barStyle={'dark-content'} />
      <Home/>
    </SafeAreaView>
  );
};


export default App;
