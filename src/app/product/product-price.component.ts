import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'product-price',
  template: '<div class="price-display">\${{ price }}</div>'
})
export class ProductPriceComponent {
  @Input() price: number;
}
