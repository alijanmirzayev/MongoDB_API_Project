import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: String,
    body: String,
    likeCount: String
}, {
    versionKey: false,
})

export const postModel = model('post', postSchema)