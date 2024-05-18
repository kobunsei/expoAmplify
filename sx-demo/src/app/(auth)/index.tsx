import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from '@/components/Button';
import Colors from '@/constants/Colors';
import { Link, Stack, useRouter } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const signin = () => {
    login({ email: email, name: "", token: "" });
    router.replace('(top)/');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'サインイン' }} />

      <Text style={styles.label}>ユーザー名</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="taro@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>パスワード</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />

      <Button text="サインイン" onPress={signin} />
      <Link href="/sign-up" style={styles.textButton}>
        アカウントの作成
      </Link>
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

export default SigninScreen;