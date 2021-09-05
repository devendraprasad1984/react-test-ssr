import functions from 'firebase-functions'
import React from "react";
import {renderToString} from 'react-dom/server'
import fs from 'fs'
import App from './src/app'
import express from 'express'

const index=fs.readFileSync(__dirname+'index.html','utf8')
const app = express()
app.get('**', (req, res) => {
    const html = renderToString(<App/>)
    const finalHtml=html.replace('___ROOT___',`${html}`)
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    res.send(finalHtml)
})

export let ssrapp = functions.https.onRequest(app)
