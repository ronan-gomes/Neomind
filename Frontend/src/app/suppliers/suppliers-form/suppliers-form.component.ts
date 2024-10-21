import { SupplierService } from '../../services/supplier.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../supplier';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styleUrl: './suppliers-form.component.css',
})
export class SuppliersFormComponent {
  form!: FormGroup;
  supplier!: Supplier;

  name!: string;
  email!: string;
  comment!: string;
  cnpj!: string;

  continue: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private alertService: AlertService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      comment: [null],
      cnpj: [null, [Validators.required]],
    });
  }

  onSubmitForm(form: FormGroup): void {
    this.name = form.value.name;
    this.email = form.value.email;
    this.comment = form.value.comment;
    this.cnpj = form.value.cnpj;
    this.continue = true;

    this.createPost();
  }

  createPost() {
    this.supplierService.save(this.form.value).subscribe({
      next: () => this.alertService.showAlert('Fornecedor cadastrado com sucesso','success',3000),
      error: () => this.alertService.showAlert('Erro ao cadastrar fornecedor','danger',3000),
      complete: () => this.router.navigate(['list']),
    })
    console.log(this.supplier)
  }

  finish(): void {
    // this.supplier = {
    //     name: string,
    //     email: number;
    //     comment: string;
    //     cnpj: string;
    // }
  }
}

// function formatarcnpj(cnpj) {
//   cnpj = cnpj.replace(/\D/g, "");
//   cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2");
//   cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2");
//   cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2");
//   cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
//   return cnpj;
//   }
