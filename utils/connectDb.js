import mongoose from "mongoose";

export const connect = () => {
    try {
        mongoose.connect('mongodb+srv://alijanmirzayev:alican9898@express.1cgcx4v.mongodb.net/')
    } catch (error) {
        console.log(error)
    }
}