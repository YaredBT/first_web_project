import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException } from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(user: any) {
    const findUser = await this.usersService.findOne(user.Username);
    
    if (user&&findUser&& await bcrypt.compare(user.password, findUser.Password)){
      const payload={Username:user.Username,sub:user._id}
      return {
      access_token: this.jwtService.sign(payload),

    };

    }
    else{
      throw new BadRequestException;
    }
    
  }

  async signup(user:any){
    const Full_name=user.Full_name
    const Username=user.Username
    const Email=user.email
    const password=user.password
    const confirm_password=user.confirm_password
    const check_Email=await this.usersService.findOne(Email)
    const check_Username=await this.usersService.findOne(Username)

  
  
    const saltOrRounds = await bcrypt.genSalt(15);
    const hashedPassword=await bcrypt.hash(password, saltOrRounds)

    if(check_Email|| check_Username){
      throw new BadRequestException("email or username exist")
    }
    const newUser= await this.usersService.create(Full_name,Username,hashedPassword,Email)

    const payload={Username:newUser.Username,Email:newUser.Email,sub:newUser._id}
    return {
      access_token:this.jwtService.sign(payload)
    }
  }

}