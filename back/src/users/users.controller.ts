import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

// @Get()
// getusers(){
//   return this.usersService.getUsers()
// }
// @Post()
// create(@Body("Full_name") Full_name:string,@Body("Username") Username:string, @Body("password") password:string){
//   return this.usersService.create(Full_name,Username,password)

// }
}


