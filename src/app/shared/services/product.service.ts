import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, map } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

const authorId = '1';

const headers = new HttpHeaders()
  .set('Accept', 'application/json')
  .set('authorId', authorId);

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private list: IProduct[] = [];

  constructor(private http: HttpClient) {}

  fetch(): Observable<IProduct[] | undefined> {
    return this.http
      .get<any[]>(this.url, {
        params: {},
        headers,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const result = response.body?.map((element) => {
            const { id, name, description, logo, date_release, date_revision } =
              element;
            return {
              id,
              name,
              description,
              logo,
              releaseCheck: date_release,
              reviewCheck: date_revision,
            } as IProduct;
          });
          return result;
        })
      );
  }

  private get url() {
    //return 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';
    return 'http://localhost:3000/products';
  }
}
