//Käytetty import syntaksia, koska se on helppokäyttöistä. (lisätty modules package.json)

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

//Luotu Noden selkäranka jossa hyödynnetään expressiä. Määritelty kaikki mitä node tulee käyttämään, jotta yhteys saadaan toimimaan.

const app = express();
dotenv.config()

//Luotu raja 30mb, koska kuvat saattavat olla isoja
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
//Käytetään cors ominaisuutta
app.use(cors())

//Jokainen polku alkaa /posts osoitteella eli
//http://localhost:3003/posts
app.use('/posts', postRoutes)

//Yhdistetään mongoon tämän osoitteen avulla
const CONNECTION_URL = process.env.CONNECTION_URL
//Määritellään mikä portti käytössä
const PORT = process.env.PORT

//Yhdistetään mongoon, käytetään määriteltyä osoitetta ja käsketään kuuntelemaan määrittelemäämme porttia.
//Kutsutaan sovellusta app.listen
//Tulostetaan error jos sellainen tulee
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))


//Yhdistetty onnistuneesti tietokantaan!