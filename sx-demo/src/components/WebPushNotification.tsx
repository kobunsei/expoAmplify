import { useEffect } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useAuth } from "@/providers/AuthProvider";
import { VAPID_KEY } from "./firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";
import { Platform, View } from "react-native";

import { API } from 'aws-amplify';
import { graphqlOperation } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import awsconfig from '@/aws-exports';
import { createUserToken } from '../graphql/mutations';

Amplify.configure(awsconfig);

const WebPushNotification = () => {
  if (Platform.OS !== 'web') {
    return <></>;
  }

  const { auth } = useAuth();
  const toast = useToast();

  useEffect(() => {
    console.log("Auth object in WebPushNotification:", auth); // デバッグメッセージ追加
    if (!auth) {
      requestToken();
    } else {
      requestPermission();
      observeMessage();
    }
  }, [auth]);

  const requestPermission = () => {
    console.log("requestPermission start");
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          requestToken();
        } else {
          console.log('Unable to get permission to notify.');
        }
      });
      console.log("requestPermission end");
    }
  };

  const requestToken = async () => {
    if (await AsyncStorage.getItem("deviceTokenFlg") === '1') {
      return;
    }
    console.log("requestToken start");
    try {
      const token = await getToken(getMessaging(), { vapidKey: VAPID_KEY });

      if (!!token) {
        console.log("Token generated : ", token);
        await AsyncStorage.setItem("deviceTokenFlg", "1");

        if (auth) {
          const userId = auth.userId; 
          await saveTokenToDynamoDB(userId, token);
        }
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
    }

    console.log("requestToken end");
    return;
  };

  const saveTokenToDynamoDB = async (userId: string, token: string) => {
    const input = {
      userId,
      token
    };
    try {
      await API.graphql(graphqlOperation(createUserToken, { input }));
      console.log("Token saved to DynamoDB");
    } catch (error) {
      console.log("Error saving token to DynamoDB", error);
    }
  };

  const observeMessage = async () => {
    onMessage(getMessaging(), (payload) => {
      toast.show(`${payload.notification?.title}\n\n${payload.notification?.body}`, {
        type: 'normal',
        placement: "bottom",
        duration: 5000,
        animationType: "slide-in",
      });
      console.log("recive message end");
    });
  };

  return <></>;
};

export default WebPushNotification;
