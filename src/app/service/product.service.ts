import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { productData } from '../../data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/products`, {});
  }
  detail(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product/${id}`, {});
  }
  create(data: Object): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/product`,  data)
  }
  delete(id: string): Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}/product/${id}`)
  }
  update(id: string, data: Object): Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/product/${id}`, data)
  }



  //demo
  products = productData;
  getProducts(){
    return this.products;
  }
}
