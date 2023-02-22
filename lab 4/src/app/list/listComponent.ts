import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  constructor(private clipboard: Clipboard) {}
  share(link:string, destination:string) {
    window.alert('The product has been shared!');
    this.clipboard.copy(link);
    window.open(destination);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
