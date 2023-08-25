import { Module } from '@nestjs/common';
import { ChickenController } from './chicken.controller';
import { ChickenService } from './chicken.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Chicken, ChickenSchema } from './chicken.schema'; 

@Module({
  imports: [MongooseModule.forFeature([{ name: Chicken.name, schema: ChickenSchema }])],
  controllers: [ChickenController],
  providers: [ChickenService]
})
export class ChickenModule {}
