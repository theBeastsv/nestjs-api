import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productModule } from './product/product.module';

@Module({
  imports: [productModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
