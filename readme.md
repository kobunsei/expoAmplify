# Firebaseメッセージ送信コマンド

curl -X POST -H "Authorization: key=AAAAxAflp3w:APA91bEGFBQGADTOW2Lcr5HQuEfeYrUaD2Nbnf3DzS1OtlznPaYwIEMF8VFwaRoHcvpmKb0yesPCN1MhuBYQ9ByI-CO9uADpstvA-WN9MwWz6ZhkTejgLdnDfvYuHqdwdPdOXATct_r1" -H "Content-Type: application/json" -d '{
"notification": {
 "title": "Test Message",
 "body": "I have corrected the settlement report. Please check the reasons.",
},
"to": "fC7Re72qIhvuQeIAX4QHeI:APA91bHKdTzUokq9MtQgTrq6aBF_CLMysBrzp68AqWjjx_KqHUB3XAYum9xQ088VYfIe5DMSFZfF0AzYKN06qH7ds4oUuQTD7abMjjD-GTtRWHaUWPG_YMWQfz63oEMbuZ9HGje-x8wD"
}' "https://fcm.googleapis.com/fcm/send"
