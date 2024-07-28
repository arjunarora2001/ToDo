
// File name App.js 
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ToDoScreen from './src/ToDoScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <ToDoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
})