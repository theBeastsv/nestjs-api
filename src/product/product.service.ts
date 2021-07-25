import { Injectable, NotFoundException } from '@nestjs/common';
//import { NotFoundError } from 'rxjs';

import{product} from './product.model';
@Injectable()
export class productservice{
    private product :product[]=[];
    insertproduct(title: string,desc: string,price: number){
        const prodId=Math.random().toString();
        const newproduct =new product(prodId,title, desc, price);
        this.product.push(newproduct);
        return prodId; 
    }
    getproduct(){
        return [...this.product];
    }
    getsingleproduct(productId:string){
     const product = this.findProduct(productId)[0];
     return{...product}
    }

    updateProduct(productId: string, title: string, desc: string, price: number) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = { ...product };
        if (title) {
          updatedProduct.title = title;
        }
        if (desc) {
          updatedProduct.description = desc;
        }
        if (price) {
          updatedProduct.price = price;
        }
        this.product[index] = updatedProduct;
      }
      deleteProduct(prodId: string) {
        const index = this.findProduct(prodId)[1];
        this.product.splice(index, 1);
    }
    private findProduct(id:string):[product , number]{
        const productIndex= this.product.findIndex((prod)=> prod.id === id);
        const product = this.product[productIndex];
     if(!product)
     {
         throw new NotFoundException('Product not found');
     }
     return [product,productIndex];
    }
} 