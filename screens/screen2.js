import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const Screen2 = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddToBag = () => {
    navigation.navigate('Screen3'); // Chuyển hướng sang Screen3
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Image
        source={require('../assets/Mask Group.png')}
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Get your groceries{'\n'}with nectar
      </Text>
      <PhoneInput
        defaultCode="US"
        layout="first"
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textInput}
      />
      <View style={styles.line} />
      <Text style={styles.socialMediaText}>
        Or connect with social media
      </Text>
      
      {/* Nút đăng nhập bằng Google */}
      <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
        <Image
          source={require('../assets/Group 6795.png')}
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút đăng nhập bằng Facebook */}
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <Image
          source={require('../assets/Vector (1).png')}
          style={styles.icon1}
        />
        <Text style={[styles.socialButtonText, styles.facebookButtonText]}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fbfbfb',
    top: 20,
  },
  image: {
    width: 360,
    height: 374,
  },
  subtitle: {
    fontSize: 26,
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 15,
  },
  phoneInputContainer: {
    marginTop: 5,
    width: '100%',
    backgroundColor: '#fbfbfb',
  },
  textInput: {
    height: 50,
    backgroundColor: '#fbfbfb',
    borderRadius: 8,
  },
  line: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
  },
  socialMediaText: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 16,
    color: '#828282',
    alignSelf: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  googleButton: {
    backgroundColor: '#5383ec', // Màu nền của nút Google (trắng)
  },
  facebookButton: {
    backgroundColor: '#4a66ac', // Màu nền của nút Facebook (xanh dương)
  },
  icon: {
    width: 22,
    height: 24,
    marginRight: 10,
  },
  icon1: {
    width: 11,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#fff', // Màu chữ của nút Google (đen)
  },
  facebookButtonText: {
    color: '#fff', // Màu chữ của nút Facebook (trắng)
  },
});

export default Screen2;
