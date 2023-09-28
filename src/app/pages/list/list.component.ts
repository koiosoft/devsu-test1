import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';

const pageSize = 6;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  testImageUrl =
    'https://www.visa.com.co/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-classic-credito-centrada-400x225.jpg';

  _products: IProduct[] = [];
  loading: boolean = true;
  currentPage: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetch().subscribe((data) => {
      if (data) {
        this.loading = false;
        this._products = data;
      }
    });
  }

  get products() {
    return this._products;
  }

  get pageData() {
    const position = this.currentPage * pageSize;
    return this.products.slice(position, position + pageSize);
  }

  get pageCount() {
    const count = Math.ceil(this.products.length / pageSize) - 1;
    return count >= 0 ? count : 0;
  }

  delete(id: string) {
    //Deleting product
  }

  onChangePage(event: Event) {
    this.currentPage = Number((event.target as HTMLSelectElement).value);
  }
}
