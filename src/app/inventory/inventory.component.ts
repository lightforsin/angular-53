import { Component } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
    selector: '[inventory-app-root]',
    template: `
        <div class="inventory-app">
            <product-list
                [productList]="products"
                (onProductSelected)="productWasSelected($event)">
            </product-list>
        </div>
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
export class InventoryAppComponent {

    products: Product[];

    constructor() {
        this.products = [
            new Product(
                'MYSHOES',
                'Black Running Shoes',
                '/assets/images/products/black-shoes.jpg',
                ['Men', 'Shoes', 'Running Shoes'],
                109.99),
            new Product(
                'NEATOJACKET',
                'Blue Jacket',
                '/assets/images/products/blue-jacket.jpg',
                ['Women', 'Apparel', 'Jackets & Vests'],
                238.99),
            new Product(
                'NICEHAT',
                'A Nice Black Hat',
                '/assets/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99)
        ];
    }

    productWasSelected(product: Product) {
        console.log('Selected product: ' + product.name);
    }
}