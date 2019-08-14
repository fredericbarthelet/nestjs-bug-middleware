import { Injectable, NestMiddleware, Scope } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class EnricherMiddleware implements NestMiddleware {
  constructor(private readonly appService: AppService) {}

  use(req: any, res: any, next: () => void) {
    console.log('Middleware execution');
    next();
  }
}
