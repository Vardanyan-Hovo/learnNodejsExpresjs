import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchData from "./src/Fetchdata"

export default function App() {
  console.log("all ok");
  return (
    <View style={styles.container}>


      <Text>--------Hello---------</Text>







      <Text>--------Hello---------</Text>
      <Text>--------Hello---------</Text>

      <Text>--------Hello---------</Text>
      <Text>--------Hello---------</Text>





      
      <FetchData />



      <StatusBar style="auto" />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
