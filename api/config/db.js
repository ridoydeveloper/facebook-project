import mongoose from "mongoose";



// create a mongoDB connection


const mongoDBConnect = async () => {


     try {

        const connection = await mongoose.connect(process.env.MONGO_STRING);
        
        console.log(`mongo DB connected successfull`.bgBlue.black);
     } catch (error) {

        console.log(error)
        
     }

}


// expor mongo connection

export default mongoDBConnect;