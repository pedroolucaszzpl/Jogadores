import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Jogadores');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver Jogadores</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE5A8', // Branco, cor principal do Real Madrid
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    color: '#002F6C', // Azul escuro, cor secundária do Real Madrid
    fontWeight: 'bold',
    textShadowColor: '#FFD700', // Dourado, referência ao logo do time
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: '#FFD700', // Dourado
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderColor: '#002F6C',
    borderWidth: 2,
  },
  buttonText: {
    color: '#002F6C', // Azul escuro
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
