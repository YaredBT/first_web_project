import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';


@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(@Param('id') id: string, @Body("title") title:string,@Body("images_path") images_path:string, @Body("tag") tag:string,@Body("logo_path") logo_path:string,@Body("description") description:string,@Body("Address") Address:{},@Body("vedio_path") vedio_path:string,@Body("audio_path") audio_path:string,@Body("services") services:string ) {
    return this.cardsService.create(id,
      title,
      logo_path,
      description,
      Address,
      vedio_path,
      images_path,
      audio_path,
      services,
      tag);
  }

  @Get()
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body("title") title:string,@Body("images_path") images_path:string, @Body("tag") tag:string,@Body("logo_path") logo_path:string,@Body("description") description:string,@Body("Address") Address:{},@Body("vedio_path") vedio_path:string,@Body("audio_path") audio_path:string,@Body("services") services:string) {
    return this.cardsService.update(
      id,
      title,
      logo_path,
      description,
      Address,
      vedio_path,
      images_path,
      audio_path,
      services,
      tag);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(id);
  }
}
