import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const Screen1 = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Screen2'); // Navigate to Screen2
  };

  return (
    <ImageBackground 
      source={require('../assets/8140 1.png')} // Background image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/Group.png')} // Your image path
          style={styles.image} 
        />
        <Text style={styles.title}>
          Welcome{"\n"}to our store
        </Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  container: {
    alignItems: 'center', // Center content horizontally
  },
  image: {
    width: 48, // Image width
    height: 56, // Image height
    top: 125,
    resizeMode: 'contain', // Maintain aspect ratio
  },
  title: {
    fontSize: 40, // Title font size
    fontWeight: '600', // Bold font
    color: '#fff', // Text color
    marginTop: 20, // Top margin for title
    textAlign: 'center', // Center text
    top: 120,
    fontFamily: 'Gilroy', // Use Gilroy font
  },
  subtitle: {
    fontSize: 16, // Subtitle font size
    color: '#fff', // Text color
    textAlign: 'center', // Center text
    top: 130,
    fontWeight: '200',
    fontFamily: 'Gilroy', // Use Gilroy font
  },
  button: {
    backgroundColor: '#53b175', // Button background color
    paddingVertical: 15, // Vertical padding in button
    paddingHorizontal: 100, // Horizontal padding in button
    borderRadius: 10, // Rounded corners
    position: 'absolute', // Fixed position for button
    bottom: 40, // Bottom margin
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 18, // Font size for button text
    fontWeight: '400', // Button text weight
    fontFamily: 'Gilroy', // Use Gilroy font
  },
});

export default Screen1;
