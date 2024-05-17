import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, isSupported, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyB1pTmx12Zre3lphJsr3bHDEO2tPlX4BYo",
    authDomain: "sx-demo-3eb0f.firebaseapp.com",
    projectId: "sx-demo-3eb0f",
    storageBucket: "sx-demo-3eb0f.appspot.com",
    messagingSenderId: "841946081148",
    appId: "1:841946081148:web:96ea13f89519764d2de6f9"
  };

initializeApp(firebaseConfig);

export const VAPID_KEY = 'BJGwAZX8etO7ymRD6JZrvmIid7OM97OXajbmTSqkGh4NQiDxRQ_vZLwt0D-NRH96WYf4E7IDtVSyrvOUXjklFjk';

// export const requestForToken = (setTokenFound) => {
//   return getToken(getMessaging(), { vapidKey: 'BJGwAZX8etO7ymRD6JZrvmIid7OM97OXajbmTSqkGh4NQiDxRQ_vZLwt0D-NRH96WYf4E7IDtVSyrvOUXjklFjk' })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         setTokenFound(true);
//         return currentToken;  // トークンを返す
//       } else {
//         console.log('No registration token available. Request permission to generate one.');
//         setTokenFound(false);
//         return null;  // トークンがない場合は null を返す
//       }
//     })
//     .catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//       setTokenFound(false);
//       return null;  // エラーが発生した場合は null を返す
//     });
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(getMessaging(), (payload) => {
//       resolve(payload);
//     });
//   });