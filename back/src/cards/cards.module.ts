import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { CardSchema } from './cards.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:"Card",schema:CardSchema}])]
  ,
  controllers: [CardsController]
  ,
  providers: [CardsService]
})
export class CardsModule {}
