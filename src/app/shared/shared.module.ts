import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

import { MaterialModule } from './../material/material.module';



@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
