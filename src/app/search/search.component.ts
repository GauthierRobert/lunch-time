import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.subscribe((value) => {
      this.productService.searchFilter = value;
    });
  }

  clearSearch(): void {
    this.searchForm.get('search')?.setValue('');
  }
}
