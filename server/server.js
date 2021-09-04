import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import {renderToString} from 'react-dom/server'
import App from '../src/App'


const app = express()
const PORT = 6201

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log('error', err)
            return res.status(500).send('some error occured')
        }
        const htmlContents = renderToString(<App/>)
        res.set('Cache-Control','public, max-age=600, s-maxage=1200') //hold contents to nearest edge location for 1200 sec
        return res.send(data.replace(
            '<div id="root"</div>',
            `<div id="root">${htmlContents}</div>`)
        )
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.listen(PORT, () => {
    console.log(`app is launched ${PORT}`)
})
