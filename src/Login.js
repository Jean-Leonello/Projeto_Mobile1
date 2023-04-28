// Login.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode implementar a validação do login
    // Se o login for válido, navegue para a próxima tela
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
});
