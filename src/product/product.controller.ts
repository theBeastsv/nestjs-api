import { Body, Controller, Get, Param, Patch, Post ,Delete} from '@nestjs/common';
import { productservice } from './product.service';

@Controller('product')
export class productController {
  constructor(private readonly productservice: productservice) {}
  @Post()
  addproduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generateId = this.productservice.insertproduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return {id: generateId};
  }

  @Get()
  getAllProduct(){
      return this.productservice.getproduct();
  }

  @Get(':id')
  getproduct(@Param('id')prodId :string,)
  {
     return this.productservice.getsingleproduct(prodId);
  }

  @Patch(':id')
  
      updateproduct(
      @Param('id') prodId:string,
      @Body('title') prodTitle: string,
      @Body('description') prodDesc: string,
      @Body('price') prodPrice: number,)
            {
this.productservice.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
return null;
            }
            @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
      this.productservice.deleteProduct(prodId);
      return null;
  }
    
}
