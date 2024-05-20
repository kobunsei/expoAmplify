import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from '@/aws-exports';
import { Auth as AuthType } from '@/types';

Amplify.configure(awsconfig);

Amplify.configure({
  Analytics: {
    disabled: true
  }
});

type AmplifyUser = {
  username: string;
  attributes?: {
    email?: string;
    [key: string]: any;
  };
  [key: string]: any;
};

const SigninScreen = () => {
  const router = useRouter();
  const { signin } = useAuth();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user: AmplifyUser) => {
        const authObject: AuthType = {
          userId: user.username
        };
        signin(authObject);
        router.replace('(top)/');
      })
      .catch(() => {
        // ユーザーが認証されていない場合は何もしない
      });
  }, [router, signin]);

  return (
    <View style={styles.container}>
      <Text>ログイン画面</Text>
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
    color: 'blue', // Colors.light.tint が undefined の場合
    marginVertical: 10,
  },
});

export default withAuthenticator(SigninScreen);
