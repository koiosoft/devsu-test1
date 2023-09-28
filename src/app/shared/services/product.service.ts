import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, map } from 'rxjs';
import * as moment from 'moment';
import { IProduct } from '../interfaces/product.interface';

const authorId = '33';

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

  save(product: IProduct): Observable<any> {
    const mapSuccess = map((result: HttpResponse<any>) => {
      if (result.status === 200) {
        return true;
      }
      return false;
    });
    const { id, name, description, logo, releaseCheck, reviewCheck, isNew } =
      product;
    const data = {
      id,
      name,
      description,
      // logo,
      date_release: this.parseDate(releaseCheck),
      date_revision: this.parseDate(reviewCheck),
    };
    if (isNew) {
      return this.http
        .post<any>(this.url, data, { headers, observe: 'response' })
        .pipe(mapSuccess);
    }
    return this.http.put<any>(this.url, data, { headers }).pipe(mapSuccess);
  }

  parseDate(value: string): Date {
    const momentValue = moment(value, 'DD/MM/YYYY', true);
    return momentValue.toDate();
  }

  private get url() {
    return 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';

    //return 'http://localhost:3000/products';
  }
}
