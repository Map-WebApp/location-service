
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from '../schemas/location.schema';
import { LocationService } from '../services/location.service';
import { LocationController } from '../controllers/location.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Location', schema: LocationSchema }])
  ],
  providers: [LocationService],
  controllers: [LocationController]
})
export class LocationModule {}
