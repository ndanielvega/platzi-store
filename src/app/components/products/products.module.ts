import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../material/material.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductsRoutingModule,
        FormsModule,
        MaterialModule
    ]
})
export class ProductsModule {}
