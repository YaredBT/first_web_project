
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';


import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private usermodel:Model<User>){
  }
  // private readonly users = this.usermodel.find();
  async findOne(value:string){
    const user=await this.usermodel.findOne({Username:value})
    return user;
  }
  async create(Full_name:string,Username:string,Password:string,Email:string){
    const newUser= new this.usermodel({
      Full_name,
      Username,
      Password,
      Email
    })
  const result=newUser.save()
    return result
  }
}
