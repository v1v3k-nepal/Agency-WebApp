import mongoose from "mongoose";

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Connection failed!");
        // handleError(error);
      }
}

export default connect;