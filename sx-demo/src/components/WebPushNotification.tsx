import { useEffect, useState } from "react";
import { Messaging, getMessaging, getToken, onMessage } from "firebase/messaging";
import { useAuth } from "@/providers/AuthProvider";
import { VAPID_KEY } from "./firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";
import { Platform, View } from "react-native";

const WebPushNotification = () => {
  // web以外の場合利用できないためリターンする。
  if (Platform.OS !== 'web') {
    return <></>;
  }

  const {auth} = useAuth();
  const toast = useToast();
  useEffect(() => {
    if( !auth ) {
      // リクエストトークンを試行
      // 試行することで、Firebase用サービスワーカーは登録される
      requestToken();
    } else {
      // 通知権限をリクエストする
      requestPermission();

      // プッシュ通知を監視する
      observeMessage();
    }
  }, [auth]);

  const requestPermission = ()=> {
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
  }
  
  const requestToken = async () => {
    if (await AsyncStorage.getItem("deviceTokenFlg") === '1') {
      // デバイストークン取得済み
      return;
    }
    console.log("requestToken start");
    // デバイストークンを取得する
    try {
      const token = await getToken(getMessaging(), {
        vapidKey: VAPID_KEY,
      });
    
      if( !!token ) {
        //We can send token to server
        console.log("Token generated : ", token);
        await AsyncStorage.setItem("deviceTokenFlg", "1");
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
    }
  
    console.log("requestToken end");
    return;
  }
  
  const observeMessage = async () => {
    onMessage(getMessaging(),(payload) => {
      toast.show(`${payload.notification?.title}\n\n${payload.notification?.body}`, {
        type: 'normal',
        placement: "bottom",
        duration: 5000,
        animationType: "slide-in",
      });
      console.log("recive message end");
    })
  }
  
  return <></>;
};

export default WebPushNotification;