import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chicken } from './chicken.schema';
import { Model } from 'mongoose';
import { CreateChickenDto } from './dto/create-chicken.dto';
import { UpdateChickenDto } from './dto/update-chicken.dto';
import { RunChickenDto } from './dto/run-chicken.dto';

@Injectable()
export class ChickenService {
  constructor(
    @InjectModel(Chicken.name) private chickenModel: Model<Chicken>,
  ) {}

  async create(createChickenDto: CreateChickenDto): Promise<Chicken> {
    const newChicken = new this.chickenModel(createChickenDto);
    return await newChicken.save();
  }

  async findAll(): Promise<Chicken[]> {
    return await this.chickenModel.find().exec();
  }

  async findOne(name: string): Promise<Chicken> {
    return await this.chickenModel.findOne({ name: name });
  }

  async update(
    name: string,
    updateChickenDto: UpdateChickenDto,
  ): Promise<Chicken> {
    return await this.chickenModel.findOneAndUpdate(
      { name: name },
      { $set: updateChickenDto },
      { new: true },
    );
  }

  async remove(name: string): Promise<any> {
    return await this.chickenModel.deleteOne({ name: name });
  }

  async runAndUpdateStep(runChikenDto: RunChickenDto) {
    const chicken = await this.findOne(runChikenDto.name);
    return await this.chickenModel.findOneAndUpdate(
      { name: chicken.name },
      {
        $set: {
          steps: chicken.steps + 1,
          isRunning: true,
        },
      },
      { new: true },
    );
  }
}
