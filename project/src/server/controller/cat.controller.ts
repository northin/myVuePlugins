import { Get, Controller,Req,Param,Query, Put,Body,Post } from '@nestjs/common';
import { Cat } from './../interface/cat.interface';
import { Message } from './../interface/messgae.interface';
import { CatServer } from './../server/cat.server'
import { CatDto } from './../dto/cat.dto'

@Controller("cat")
export class CatController {
  constructor(private readonly catServer: CatServer) {}

  @Get()
  async findAll() : Promise<Cat[]>{
    return this.catServer.findAll()
  }

  @Get(":id")
  findById(@Param() param): string {
    return "that's all"+param.id;
  }


  @Post()
  async find() : Promise<Cat[]>{
    return this.catServer.findAll()
  }


  @Post("add")
  async add(@Body() catDto:CatDto) : Promise<Message>{
    console.log(catDto)
    return this.catServer.add(catDto)
  }

  @Post("del")
  async del(@Body() obj:number) : Promise<Message>{
    console.log(obj)
    return this.catServer.del(obj)
  }
}
