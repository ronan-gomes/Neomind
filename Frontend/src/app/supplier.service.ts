import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url: string = 'url do banco'

  constructor(private httpClient: HttpClient) { }

  list(){
    return
  }
}
