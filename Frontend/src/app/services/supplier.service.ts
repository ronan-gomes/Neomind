import { Supplier } from './../suppliers/supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url: string = '/suppliers'

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(this.url)
  }

  post(supplier: Supplier){
    return this.httpClient.post<Supplier>(this.url, supplier);
  }

  listId(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${id}`)
  }

  // put(id: any): Observable<any> {
  //   return this.httpClient.put(`${this.url}/${id}`, id)
  // }

  put(id: any, body: any): Observable<Supplier>{
      return this.httpClient.put<any>(`${this.url}/${id}`, body);
  }

  delete(id: any, body: any): Observable<Supplier>{
    return this.httpClient.put<any>(`${this.url}/${id}`, body);
  }


  // error(e?: any): Observable<any>{
  //   return e
  // }

}
