import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

export default function App() {
  
  // const Fade = new Animated.Value(0);
  // const Spin = new Animated.Value(0);
  const Spring = new Animated.Value(0);
  // const ScaleValue = Scale.interpolate({
  //   inputRange:[0,1],
  //   outputRange:[0,1]
  // })

  useEffect(()=>{
    Animated.spring(Spring,{
      toValue:1,
      // duration:5000,
      friction:1,
      useNativeDriver:true
    }).start()
  },{Spring})
  return (
    <Animated.View style={{backgroundColor:'black', width:200, height:200, borderRadius:50, transform:[{scale:Spring}] }}>
    </Animated.View>
  );
}

