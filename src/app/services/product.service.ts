import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public searchFilter = '';

  private products: Product[] = [
    new Product('Club', 4.20, 'sandwich', 'Le club sandwich est un sandwich d\'origine américaine, composé de deux étages de garniture séparés par des tranches de pain souvent toastées. Il est normalement coupé en quartiers, qui sont disposés à la verticale, la pointe vers le haut, et retenus par des cure-dents.'),
    new Product('Americain', 4, 'sandwich', 'Le sandwich américain est un type de sandwich comprenant une viande (steak haché, merguez, fricadelle, etc.) et des frites directement dans le pain. Selon les régions, on peut y rajouter du chèvre chaud.'),
    new Product('Soupe au champignon', 5.5, 'soupe', 'Elle contient des champignons'),
    new Product('Thon', 3.80, 'sandwich', 'Le sandwich au thon est constitué de thon, déposé entre deux tranches de pain. Il est généralement fait à base d\'ingrédients tels que la mayonnaise, la salade, les cornichons, les tomates ou les œufs.'),
    new Product('Club poulet', 6.00, 'sandwich', 'in-progress')
  ];

  constructor() {
  }

  public getProducts(): Product[] {
    return this.products.filter(p => p.name.toLowerCase().includes(this.searchFilter.toLowerCase()));
  }
}
