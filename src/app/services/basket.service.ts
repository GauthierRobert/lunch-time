import {EventEmitter, Injectable} from '@angular/core';
import {BasketProduct} from '../models/basket-product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket: BasketProduct[] = [];

  public productEmitter = new EventEmitter();

  constructor() {
  }

  public getBasket(): BasketProduct[] {
    return this.basket;
  }

  public getBasketPrice(): number {
    return this.basket.map(p => p.price * p.quantity).reduce((sum, price) => sum + price, 0);
  }

  public addProductInBasket(basketProduct: BasketProduct): void {
    if (!this.basket.map(p => p.name).includes(basketProduct.name)) {
      this.basket.push(new BasketProduct(basketProduct.name, basketProduct.price, 1));
    } else {
      this.basket.find(p => p.name === basketProduct.name).quantity++;
    }
    this.productEmitter.emit();
  }

  public subtractProductInBasket(basketProduct: BasketProduct): void {
    const index = this.basket.map(p => p.name).indexOf(basketProduct.name, 0);
    if (index > -1) {
      const productInBasket = this.basket[index];
      if (productInBasket.quantity === 1) {
        this.basket.splice(index, 1);
      } else {
        productInBasket.quantity--;
      }
    }
    this.productEmitter.emit();
  }
}
