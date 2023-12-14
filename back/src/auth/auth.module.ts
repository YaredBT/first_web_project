import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: "sdkjnvkskx",
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService,JwtModule,JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
