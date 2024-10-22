import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from './../../services/supplier.service';
import { Component } from '@angular/core';
import { Supplier } from '../../suppliers/supplier';
import { AlertService } from '../../services/alert.service';



@Component({
  selector: 'app-suppliers-delete',
  templateUrl: './suppliers-delete.component.html',
  styleUrl: './suppliers-delete.component.css'
})
export class SuppliersDeleteComponent {
  supplier!: Supplier

  constructor(private supplierService: SupplierService, private router: Router, private route: ActivatedRoute, private alertService: AlertService){
    const id = this.route.snapshot.paramMap.get('id');
    this.supplierService.listId(id).subscribe((supplier)=>{
      this.supplier = supplier
    })
  }
  onCancel(){
    this.router.navigate(['list'])

  }
  onDelete(){
    this.supplierService.delete(this.supplier.id).subscribe({
      next: () => this.alertService.showAlert('Fornecedor excluído com sucesso!','success',3000),
      error: () => this.alertService.showAlert('Erro ao excluir fornecedor','danger',3000),
      complete: () => this.router.navigate(['list']),}
    )
  }

}
