import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-board',
  templateUrl: './product-board.component.html',
  styleUrls: ['./product-board.component.css']
})
export class ProductBoardComponent implements OnInit {

  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {
  }

}
