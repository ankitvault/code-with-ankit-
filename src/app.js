import express from 'express'
import cookieParser  from 'cookie-parser'
import cors from "cors"
import e from 'express'
const app = express()




app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

//cookie parser- here that some data only server can read and delete so we configure here 
app.use(cookieParser())
export {app}