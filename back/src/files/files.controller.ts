import { Controller, Post, UploadedFile, UploadedFiles,UseInterceptors } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { FileTypeValidator, MaxFileSizeValidator, ParseFilePipe } from '@nestjs/common/pipes';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';


@Controller('files')
export class FilesController {

  @Post("photos")
  @UseInterceptors(FileInterceptor("photos",{storage:diskStorage({
    destination:"../front end/images",filename:(req,files,callback)=>{
      const ext=extname(files.originalname)
      const filename=`${files.originalname}-${ext}`
      callback(null,filename)
    }
  })}))
  async uploadPhoto(@UploadedFile(
    new ParseFilePipe({
      validators:[
        new MaxFileSizeValidator({
          maxSize:100000000
        })
      ]
    })

  ) files:Express.Multer.File){
    return {
      files
    }
  }


  @Post("audio")
  @UseInterceptors(FileInterceptor("audio",{storage:diskStorage({
    destination:"../front end/audio",filename:(req,files,callback)=>{
      const ext=extname(files.originalname)
      const filename=`${files.originalname}-${ext}`
      callback(null,filename)
    }
  })}))
  async uploadVideo(@UploadedFile(

    new ParseFilePipe({
      validators:[
        new MaxFileSizeValidator({
          maxSize:100000000
        })
      ]
    })

  ) files:Express.Multer.File){
    return {
      files
    }
  }

  @Post("video")
  @UseInterceptors(FileInterceptor("video",{storage:diskStorage({
    destination:"../front end/video",filename:(req,files,callback)=>{
      const ext=extname(files.originalname)
      const filename=`${files.originalname}-${ext}`
      callback(null,filename)
    }
  })}))
  async uploadMultipe(@UploadedFile(

    new ParseFilePipe({
      validators:[
        new MaxFileSizeValidator({
          maxSize:100000000
        })
      ]
    })

  ) files:Express.Multer.File){
    return {
      files
    }
  }
  
}



