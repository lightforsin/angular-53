import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'product-list',
    template: `
    <sku></sku>
    <div class="ui items">
        <product-row 
            *ngFor="let product of productList"
            [product]="product"
            (click)="selectProduct(product)"
            [class.selected]="isSelected(product)">
        </product-row>
    </div>
    `
})
export class ProductListComponent {
    @Input() productList: Product[];
    @Output() onProductSelected = new EventEmitter<Product>();
    currentProduct: Product;

    selectProduct(product: Product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}