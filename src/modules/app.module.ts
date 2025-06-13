
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationModule } from './location.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    LocationModule
  ]
})
export class AppModule {}
