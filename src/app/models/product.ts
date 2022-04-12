export class Product {

  constructor(public name: string, public price: number, public type: 'sandwich' | 'soupe' | 'pate', public description?: string) {
  }

}

