# コマンド

## 1.パッケージインストール
```
npm install
```

## 2.開発サーバ起動
```
npm run start

› Press s │ switch to development build
› Press a │ open Android                │ Androidのバーチャルデバイスに動作する
› Press i │ open IOS simulator          │ IOSシミュレーターに動作する
› Press w │ open web                    │ ブラウザに動作する
› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor
› Press ? │ show all commands
```

## 3.デプロイ（キャッシュ利用なし）
### 3.1.ビルド
```
npx expo export -p web
```

### 3.2.デプロイ（検証用）
```
netlify deploy
```

## 4.デプロイ（キャッシュ利用あり）
### 4.1.ビルド
```
npm run build:web
```

### 4.2.デプロイ（検証用）
```
netlify deploy
```

## 5.Firebaseメッセージ送信コマンド

curl -X POST -H "Authorization: key=AAAAxAflp3w:APA91bEGFBQGADTOW2Lcr5HQuEfeYrUaD2Nbnf3DzS1OtlznPaYwIEMF8VFwaRoHcvpmKb0yesPCN1MhuBYQ9ByI-CO9uADpstvA-WN9MwWz6ZhkTejgLdnDfvYuHqdwdPdOXATct_r1" -H "Content-Type: application/json" -d '{
"notification": {
 "title": "Test Message",
 "body": "I have corrected the settlement report. Please check the reasons.",
},
"to": "fC7Re72qIhvuQeIAX4QHeI:APA91bHKdTzUokq9MtQgTrq6aBF_CLMysBrzp68AqWjjx_KqHUB3XAYum9xQ088VYfIe5DMSFZfF0AzYKN06qH7ds4oUuQTD7abMjjD-GTtRWHaUWPG_YMWQfz63oEMbuZ9HGje-x8wD"
}' "https://fcm.googleapis.com/fcm/send"
