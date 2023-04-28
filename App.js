import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    if (email === 'jeansleonello@gmail.com' && password === 'euzin444') {
      // Login bem sucedido - aqui você pode salvar o token de autenticação ou qualquer outra informação que precise ser compartilhada entre telas
      setLoginError('');
    } else {
      // Login falhou - atualize o estado do erro
      setLoginError('E-mail ou senha inválidos');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loginError !== '' && (
        <Text style={{ color: 'blue', marginBottom: 10 }}>{loginError}</Text>
      )}
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderWidth: 1, borderColor: '', padding: 15, width: '80%', marginBottom: 20 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={{ borderWidth: 1, borderColor: '#191970', padding: 10, width: '50%', marginBottom: 40 }}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;