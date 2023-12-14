import * as mongoose from "mongoose"


export const CardSchema= new mongoose.Schema({
    title:{
        type:String
        ,
        required:true
    },
    logo_path:{
        type:String
        ,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Address:{
        type:{}, 
        required:true
    },
    vedio_path:{
        type:String
        ,
        required:true
    },
    images_path:{
        type:String,  
        required:true
    },
    audio_path:{
        type:String
        ,
        required:true
    }
    ,
    services:{
        type:String,
        required:true
    }
    ,
    tag:{
        type:String
        ,
        required:true
    }
    ,
    date:{
        type:Date
    }
})

export class Card{
    title:string
    logo_path:string
    description:string
    Address:{}
    vedio_path:string
    images_path:string
    audio_path:string
    services:string
    tag:string
}


