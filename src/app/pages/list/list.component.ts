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

  private source: IProduct[] = [];
  _products: IProduct[] = [];
  loading: boolean = true;
  currentPage: number = 0;
  search: string = '';

  showModal = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetch().subscribe((data) => {
      if (data) {
        this.loading = false;
        this._products = data;
        this.source = data;
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
    if(count === 0){
      return 1
    }else if(count > 0){
      return count;
    }
    return 0;
  }

  get showPager(){
    return this.pageCount>1;
  }

  get count(): number {
    return this.products.length;
  }

  delete(id: string) {
    //Deleting product
  }

  onChangePage(event: Event) {
    this.currentPage = Number((event.target as HTMLSelectElement).value);
  }

  onSearch(event: Event) {
    const search: string = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    if (search !== '') {
      this._products = this.source.filter(
        (p) =>
          p.name.toLowerCase().indexOf(search) > -1 ||
          p.description.toLowerCase().indexOf(search) > -1
      );
    } else {
      this._products = this.source;
    }
  }

  closeModal(){
    this.showModal = false;
  }

  onShowModal(){
    this.showModal = true;
  }
}
