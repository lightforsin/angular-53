import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'product-row',
    host: { 'class': 'item' },
    templateUrl: './product-row.template.html'
})
export class ProductRowComponent {
    @Input() product: Product;
}