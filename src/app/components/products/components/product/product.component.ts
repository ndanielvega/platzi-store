import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() clickProduct = new EventEmitter<any>();
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.clickProduct.emit(this.product.id);
  }


}
