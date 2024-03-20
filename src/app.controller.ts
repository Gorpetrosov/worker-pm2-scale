import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('blocking')
  getBlocking(@Query('cpuTimeMs') cpuTimeMs: string) {
    return this.appService.getBlocking(parseInt(cpuTimeMs));
  }

  @Get('worker')
  async getWorker(@Query('cpuTimeMs') cpuTimeMs: string) {
    return this.appService.getWorker(parseInt(cpuTimeMs));
  }
}
