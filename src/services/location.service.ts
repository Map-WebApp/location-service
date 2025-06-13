
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LocationService {
  constructor(@InjectModel('Location') private locModel: Model<any>) {}

  async addLocation(dto: any) {
    return this.locModel.create(dto);
  }

  async list(user: string) {
    return this.locModel.find({ user }).exec();
  }
}
