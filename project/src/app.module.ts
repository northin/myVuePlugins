import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatController } from './server/controller/cat.controller';
import { AppService } from './app.service';
import { CatServer } from './server/server/cat.server';
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController,CatController],
  providers: [ AppService,CatServer ]
})
export class AppModule {}
