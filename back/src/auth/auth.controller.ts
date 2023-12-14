import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {JwtStrategy} from "./jwt.strategy"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService,private JwtStrategy:JwtStrategy) {}

  
  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  
  @Post('signup')
  async signup(@Body() body) {
    return this.authService.signup(body);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("user")
  async user(@Request() req){
    return req.user
  }
}
