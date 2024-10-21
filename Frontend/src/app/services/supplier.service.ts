import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map } from 'rxjs';
import { Supplier } from '../suppliers/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url: string = '/suppliers'

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(this.url)
  }

  save(supplier: Supplier){
    console.log(supplier)
    return this.httpClient.post<Supplier>(this.url, supplier);
  }

  error(e?: any): Observable<any>{
    return e
  }

}
