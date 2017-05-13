import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { InventoryAppComponent } from './inventory/inventory.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductRowComponent } from './product/product-row.component';
import { ProductImageComponent } from './product/product-image.component';
import { ProductDepartmentComponent } from './product/product-department.component';
import { ProductPriceComponent } from './product/product-price.component';
import { SkuComponent, SkuComponentBuilder } from './forms/sku.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    InventoryAppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductPriceComponent,
    SkuComponent,
    SkuComponentBuilder
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InventoryAppComponent]
})
export class AppModule { }
