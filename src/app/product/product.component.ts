import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {BasketService} from '../services/basket.service';
import {BasketProduct} from '../models/basket-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: Product | undefined;

  private show: boolean;

  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
  }

  addProductToBasket(): void {
    this.basketService.addProductInBasket(new BasketProduct(this.product.name, this.product.price, 1));
  }

  public isSandwich(): boolean {
    return this.product.type === 'sandwich';
  }

  switchShow(): void {
    this.show = !this.show;
  }

  isShow(): boolean {
    return this.show;
  }
}
