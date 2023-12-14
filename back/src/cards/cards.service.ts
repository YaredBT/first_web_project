import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './cards.model';
// import  from "../public/index.html"


@Injectable()
export class CardsService {
  constructor(@InjectModel("Card") private cardModel:Model<Card>){
  }
  async create(
        id: string,
        title:string,
        logo_path:string,
        description:string,
        Address:{},
        vedio_path:string,
        images_path:string,
        audio_path:string,
        services:string,
        tag:string,) {
    const newCard= new this.cardModel ({
      title,
      logo_path,
      description,
      Address,
      vedio_path,
      images_path,
      audio_path,
      services,
      tag
    })

    const createdCard= await newCard.save()
    return createdCard;
  }

  async findAll() {
    const cards=await this.cardModel.find().select("-_v").lean()
    return cards;
  }

  async findOne(id: string) {
    const card=await this.cardModel.findById(id)
    return card;
  }

  
  
  async update(
    id: string,
    title:string,
    logo_path:string,
    description:string,
    Address:{},
    vedio_path:string,
    images_path:string,
    audio_path:string,
    services:string,
    tag:string) 
    {
    const card_to_be_Updated= await this.cardModel.findById(id)
    if(title){
      card_to_be_Updated.title=title
    }
    if(images_path){
      card_to_be_Updated.images_path=images_path
    }
    if(tag){
      card_to_be_Updated.tag=tag
    }
    if(logo_path){
      card_to_be_Updated.logo_path=logo_path
    }if(description){
      card_to_be_Updated.description=description
    }
    if(Address){
      card_to_be_Updated.Address=Address
    }
    if(vedio_path){
      card_to_be_Updated.vedio_path=vedio_path
    }
    if(audio_path){
      card_to_be_Updated.audio_path=audio_path
    }
    if(services){
      card_to_be_Updated.services=services
    }
    
    const card_Upadte=card_to_be_Updated.save()

    return card_Upadte;
    
  }

  async remove(id: string) {
    const card_to_be_deleted=await this.cardModel.findByIdAndDelete(id)
    
    return `This action removes  ${card_to_be_deleted.title} card`;
  }
}
