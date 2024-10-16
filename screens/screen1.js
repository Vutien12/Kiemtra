import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const Screen1 = () => {
  return (
    <ImageBackground 
      source={require('../assets/8140 1.png')} // Đường dẫn đến ảnh nền
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/Group.png')} // Đường dẫn đến ảnh của bạn
          style={styles.image} 
        />
        <Text style={styles.title}>
          Welcome{"\n"}to our store
        </Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
      </View>

      {/* Nút "Get Started" */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
  },
  container: {
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
  },
  image: {
    width: 48, // Chiều rộng của ảnh
    height: 56, // Chiều cao của ảnh
    top: 125,
    resizeMode: 'contain', // Giữ tỉ lệ ảnh
  },
  title: {
    fontSize: 40, // Kích thước chữ cho tiêu đề
    fontWeight: '600', // Đậm chữ
    color: '#fff', // Màu chữ
    marginTop: 20, // Khoảng cách trên tiêu đề
    textAlign: 'center', // Căn giữa chữ
    top: 120,
    fontFamily: 'Gilroy', // Sử dụng font Gilroy
  },
  subtitle: {
    fontSize: 16, // Kích thước chữ cho giới thiệu
    color: '#fff', // Màu chữ
    textAlign: 'center', // Căn giữa chữ
    top: 130,
    fontWeight: '200',
    fontFamily: 'Gilroy', // Sử dụng font Gilroy
  },
  button: {
    backgroundColor: '#53b175', // Màu nền của nút
    paddingVertical: 15, // Khoảng cách dọc trong nút
    paddingHorizontal: 100, // Khoảng cách ngang trong nút
    borderRadius: 10, // Bo tròn góc
    position: 'absolute', // Đặt nút ở vị trí cố định
    bottom: 40, // Khoảng cách từ đáy
  },
  buttonText: {
    color: '#fff', // Màu chữ trong nút
    fontSize: 18, // Kích thước chữ
    fontWeight: '400', // Đậm chữ
    fontFamily: 'Gilroy', // Sử dụng font Gilroy
  },
});

export default Screen1;
