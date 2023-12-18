import React, { useState } from 'react';
import { ImageBackground, Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={require('../assets/BG-LOGIN.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/Logo Dlillah.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={[styles.input, { borderRadius: 10 }]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.input, { borderRadius: 10 }]}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Warna putih dengan tingkat transparansi 0.8
    padding: 16,
    borderRadius: 10,
    width: '80%', // Sesuaikan dengan kebutuhan
    alignItems: 'center', // Agar kontennya berada di tengah secara horizontal
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'contain', // Menggunakan 'contain' agar gambar tetap proporsional di dalam kotak
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#528BF9',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
