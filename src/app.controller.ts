import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedFormData, TypedRoute } from '@nestia/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @TypedRoute.Post('/test')
  async test(
    @TypedFormData.Body() form: FormDataDto,
  ): Promise<void> {
    console.log('form: ', form);
  }
}

export interface FormDataDto {
  file: File;
  name: string;
}