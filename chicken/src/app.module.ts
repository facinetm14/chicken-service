import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChickenModule } from './chicken/chicken.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_DB_URI,
    ),
    ChickenModule,
  ],
})
export class AppModule {}