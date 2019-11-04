import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import VerticalStackLayout from './components/flex-direction-basics'
export default function App() {
 
  return (
    <View style={styles.container}>
      <VerticalStackLayout/>
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
