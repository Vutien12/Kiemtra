// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/screen1'; // Ensure the path is correct
import Screen2 from './screens/screen2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen 
          name="Screen1" 
          component={Screen1} 
          options={{ headerShown: false }} // Hide header if not needed
        />
        <Stack.Screen 
          name="Screen2" 
          component={Screen2} 
          options={{ headerShown: false }}
        />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
