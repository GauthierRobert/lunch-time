import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BasketComponent} from './basket/basket.component';
import {ProductComponent} from './product/product.component';
import {ProductBoardComponent} from './product-board/product-board.component';
import {SearchComponent} from './search/search.component';
import {BasketService} from './services/basket.service';
import {ProductService} from './services/product.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ProductComponent,
    ProductBoardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    BasketService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
