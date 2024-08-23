import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Certifique-se de importar o auth

const RealizarLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const tentarLogar = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('PaginaPrincipal');
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <ImageBackground 
      source={require('../img/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder='Email'
            placeholderTextColor="#aaa"
          />
          <TextInput 
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder='Senha'
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <Pressable style={styles.button} onPress={tentarLogar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adiciona uma leve sobreposição escura para melhor contraste
    width: '100%',
    height: '100%',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5, // Adiciona uma sombra para destacar o container
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004B87', // Azul escuro do Real Madrid
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#F6C00F', // Amarelo Real Madrid
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#004B87', // Azul escuro do Real Madrid
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RealizarLogin;
