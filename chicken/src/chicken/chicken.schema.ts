import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChickenDocument = HydratedDocument<Chicken>;

@Schema()
export class Chicken {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  birthday: Date;

  @Prop({ required: true })
  weight: number;

  @Prop({ default: 0 })
  steps: number;

  @Prop({ default: false })
  isRunning: boolean;
}

export const ChickenSchema = SchemaFactory.createForClass(Chicken);
