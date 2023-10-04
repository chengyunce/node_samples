//expressモジュール読み込み
const express = require('express')

//dotenvモジュール読み込み
const dotenv = require('dotenv')

//dotenv の設定
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT
console.log(HOST)
console.log(PORT)

//サーバー作成
const app = express()

//GETリクエストの処理
app.get('/',(req,res) =>{
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    //レスポンスの処理
    res.send('Hello!!!')
})

//サーバー(待機（Listenn）)
app.listen(PORT,HOST,()=>{
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})