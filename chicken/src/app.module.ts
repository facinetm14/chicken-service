import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChickenModule } from './chicken/chicken.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://facinetkm14:FEUWnw2y8R70dAN9@cluster0.toi055d.mongodb.net/?retryWrites=true&w=majority',
    ),
    ChickenModule,
  ],
})
export class AppModule {}
