import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from '@/components/Button';
import Colors from '@/constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

const PasswordChangeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const changePassword = () => {
    console.warn("password is changed!");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'パスワード変更' }} />

      <Text style={styles.label}>ユーザー名</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="taro@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>旧パスワード</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Text style={styles.label}>新パスワード</Text>
      <TextInput
        value={newPassword1}
        onChangeText={setNewPassword1}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Text style={styles.label}>新パスワード</Text>
      <TextInput
        value={newPassword2}
        onChangeText={setNewPassword2}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button text="変更" onPress={changePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default PasswordChangeScreen;