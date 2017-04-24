import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'product-list',
    template: `
        <product-row 
            *ngFor="let product of productList"
            [product]="product"
            (click)="selectProduct(product)"
            [class.selected]="isSelected(myProduct)">
                <h1>{{ product.name }}</h1>
                <span>{{ product.sku }}</span>
        </product-row>
    `,
    styles: [`
        .productItem {
            border: solid 1px #acacac;
            padding: 20px;
            margin-bottom: 10px;
            background-color: #fafafa;
        }
    `]
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