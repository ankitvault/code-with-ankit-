//require('.dotenv').config({path: '.env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js";

// dotenv.config({
//     path: './env'
// })

dotenv.config();







connectDB()
.then(()=>
    

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app is listing on port no : `,process.env.PORT)
    })
)
.catch((error)=>{
    console.log(`error come here`,error
    )
}
    
)







console.log("MONGO URI =>", process.env.MONGODB_URI);

















// we comment this 
// import express from "express"
// const app = express()

// (async ()=> {

//     try{
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//          app.on("errror",(error)=>{
//         console.log("ERRR: ", error);
//         throw error
//     })
//     app.listen(process.env.PORT,()=>{
//     console.log(`App is listing on port ${process.env.PORT}`);

//     })
   
// }catch (error){
//     console.error("ERROR: ",error)
//     throw err
// }


// })