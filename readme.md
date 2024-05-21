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

### 3.2.デプロイ（PWA動作確認用）
```
netlify deploy
```

## 4.デプロイ（キャッシュ利用あり）
### 4.1.ビルド
```
npm run build:web
```

### 4.2.デプロイ（PWA動作確認用）
```
netlify deploy
```

## 5.Firebaseメッセージ送信コマンド

curl -X POST -H "Authorization: key=AAAAxAflp3w:APA91bEGFBQGADTOW2Lcr5HQuEfeYrUaD2Nbnf3DzS1OtlznPaYwIEMF8VFwaRoHcvpmKb0yesPCN1MhuBYQ9ByI-CO9uADpstvA-WN9MwWz6ZhkTejgLdnDfvYuHqdwdPdOXATct_r1" -H "Content-Type: application/json" -d '{
"notification": {
 "title": "Test Message",
 "body": "I have corrected the settlement report. Please check the reasons.",
},
"to": "fScHIEnetPyzTqqkbbjBGD:APA91bFg8CbG1SuZfw5Ae95Bu9KbIKE_sKLBGxTypO7VCSP7o-Vit2X3wM6pqUOXJ4fE1pxi0qQNfnF-2DFxsMOPrdPzFfZpTw6GPv_6s1jIAyW4dqVSfjxzfo6qvY-e61d1Z9Cz4HjC"
}' "https://fcm.googleapis.com/fcm/send"
