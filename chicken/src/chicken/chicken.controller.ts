import { Body, Controller, Param, Put } from '@nestjs/common';
import { ChickenService } from './chicken.service';
import { Get, Post, Patch, Delete } from '@nestjs/common';
import { CreateChickenDto } from './dto/create-chicken.dto';
import { UpdateChickenDto } from './dto/update-chicken.dto';
import { RunChickenDto } from './dto/run-chicken.dto';

@Controller('api/chicken')
export class ChickenController {
	constructor(private readonly chickenService: ChickenService)
	{ }

	@Get()
	findAll() {
		return this.chickenService.findAll();
	}

	@Get(':name')
	findOne(@Param('name') name: string) {
		return this.chickenService.findOne(name);
	}
	
	@Post()
	create(@Body() createChickenDto: CreateChickenDto) {
		return this.chickenService.create(createChickenDto);
	}

	@Patch(':name')
	update(
		@Param('name') name: string,
		@Body() updateChickenDto: UpdateChickenDto
	) {
		return this.chickenService.update(name, updateChickenDto);
	}

	@Delete(':name')
	remove(@Param('name') name: string): Promise<any> {
		return this.chickenService.remove(name);
	}

	@Put('run')
	run(@Body() runChikenDto: RunChickenDto) {
		return this.chickenService.runAndUpdateStep(runChikenDto);
	}
}
