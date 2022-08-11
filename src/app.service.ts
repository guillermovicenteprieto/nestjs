import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Desafío CoderHouse: desarrollo de backend en NestJs y testeo en Swagger';
  }
}
