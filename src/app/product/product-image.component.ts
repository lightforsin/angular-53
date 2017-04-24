import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'product-image',
  host: { class: 'ui small image' },
  template: '<img class="product-image" [src]="product.imageUrl">'
})
export class ProductImageComponent {
  @Input() product: Product;
}