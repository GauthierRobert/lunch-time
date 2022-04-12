import {Component, OnInit} from '@angular/core';
import {BasketService} from '../services/basket.service';
import {BasketProduct} from '../models/basket-product';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public commandForm = new FormGroup({
    paymentMethod: new FormControl(''),
    trigram: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });

  public basket: BasketProduct[];

  public basketPrice: number;

  constructor(public basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basket = this.basketService.getBasket();
    this.basketService.productEmitter.subscribe(() => {
      this.basket = this.basketService.getBasket();
      this.basketPrice = this.basketService.getBasketPrice();
    });
  }

}
