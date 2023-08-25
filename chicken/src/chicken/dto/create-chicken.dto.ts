import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateChickenDto {
  @IsString()
  name: string;

  birthday: Date;

  @IsNumber()
  weight: number;

  @IsNumber()
  steps?: number;

  @IsBoolean()
  isRunning?: boolean;
}
