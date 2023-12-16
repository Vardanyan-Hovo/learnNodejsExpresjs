import React from 'react';
import { View , Text, ScrollView} from 'react-native';
import {useEffect, useState} from 'react'
import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native'
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dataFetch} from "../ENV"


//information for admin
//All data 
let allData: [];

//info About Connected Phone
export const infoAboutConnectedPhone = () => {
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
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    console.log("Hello React Native");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(dataFetch + "/data");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();
      setAllData(data);
      console.log("Data received:", data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  return (
    <ScrollView>
      {allData.length ? (
        allData.map((element, index) => (
          <View key={index}>
            <Text>{element.id}</Text>
            <Text>{element.name}</Text>
            <Text>{element.type}</Text>
            <Text>{element.email}</Text>
            <Text>{element.password}</Text>
          </View>
        ))
      ) : (
        <Text>Empty</Text>
      )}
      <Text>FetchData</Text>
    </ScrollView>
  );
}