import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';


import { CardsModule } from './cards/cards.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';
import { FilesModule } from './files/files.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ CardsModule, AuthModule, UsersModule,PassportModule, FilesModule,ConfigModule.forRoot({isGlobal:true}),MongooseModule.forRoot(process.env.DB_URL)],
  providers: [AppService],
})

export class AppModule {}
