
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { LocationService } from '../services/location.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Post()
  add(@Body() body: any) {
    return this.service.addLocation(body);
  }

  @Get()
  list(@Query('user') user: string) {
    return this.service.list(user);
  }
}
