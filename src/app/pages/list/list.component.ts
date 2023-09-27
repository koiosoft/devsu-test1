import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  testImageUrl =
    'https://www.visa.com.co/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-classic-credito-centrada-400x225.jpg';

  delete(id: string) {
    //Deleting product
  }
}
