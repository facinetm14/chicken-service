import { IsString } from 'class-validator';
export class RunChickenDto {
  @IsString()
  name: string;
}
