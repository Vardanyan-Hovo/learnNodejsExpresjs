import React from 'react';
import { View , Text} from 'react-native';
import {useEffect, useState} from 'react'
import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native'
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dataFetch} from "../ENV"



const infoAboutConnectedPhone = () => {
  NetInfo.fetch().then(state => {
    const obj:any = state?.details;
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    //ip adress
    console.log("ip[" + obj?.ipAddress + "]");


   // check the platform your app is running on (i.e., 'ios' or 'android').
    console.log(Platform.OS); // Outputs 'ios' or 'android'
   
   
    //Dimensions module provides information about the device's
    // screen dimensions.
    const { width, height } = Dimensions.get('window');
    console.log(`Screen width: ${width}, height: ${height}`);


    //React Native provides the AsyncStorage module for persistent 
    //storage similar to localStorage in web environments
    AsyncStorage.setItem('key', 'value');

  });
}

export default function FetchData() {
  useEffect(() => {
    console.log("Hello  React Native");

//    print info about connected phone
    infoAboutConnectedPhone();




    fetch(dataFetch + "/data")
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
      })
      .catch((err) => {

        console.log("Fetch error:", err);
      });
  }, []);



    return (
          <View>

                  <Text>Hello</Text>
                  <Text>World</Text>
          </View>
    )
}