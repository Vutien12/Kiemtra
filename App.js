import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/screen1'; // Đường dẫn tới màn hình của bạn
import Screen2 from './screens/screen2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Screen2 />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
