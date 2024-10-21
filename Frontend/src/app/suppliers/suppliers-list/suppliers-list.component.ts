import { Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../../services/supplier.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrl: './suppliers-list.component.css'
})
export class SuppliersListComponent implements OnInit{
  suppliers!: Supplier[]

  constructor( private supplierService: SupplierService, private router: Router){}

  ngOnInit():void{
    this.supplierService.list().subscribe((suppliers) => (this.suppliers = suppliers));
    console.log(this.suppliers);
  }

  openSupplierForm(){
    this.router.navigate(['form'])
  }
  onEdit(id: any){
    this.router.navigate(['edit', id]);
  }
}
