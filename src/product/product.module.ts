import { Module } from '@nestjs/common';
import { productController } from './product.controller';
import { productservice } from './product.service';


@Module({

controllers:[productController],
providers: [productservice],

})
export class productModule {}
