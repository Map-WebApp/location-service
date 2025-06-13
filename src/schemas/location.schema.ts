
import { Schema } from 'mongoose';

export const LocationSchema = new Schema({
  name: String,
  lat: Number,
  lng: Number,
  user: String
});
