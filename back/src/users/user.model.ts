import { SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export const UserSchema=new mongoose.Schema({
    Full_name:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
})

export class User{
    Fullname:string
    Username:string
    Password:string
    Email:string
}

export const user = SchemaFactory.createForClass(User)