import mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
    id: {type:String, require:true},
    userMessages: {type:Array, required:true},
    aiMessages: {type:Array, required:true},
})

export default mongoose.model("messages", messagesSchema)