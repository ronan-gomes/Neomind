import { SupplierService } from './../../services/supplier.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../supplier';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styleUrl: './suppliers-form.component.css',
})
export class SuppliersFormComponent implements OnInit {
  form!: FormGroup;
  name!: string;
  email!: string;
  comment!: string;
  cnpj!: string;

  continue: boolean = false;
  supplier!: Supplier;
  edit = false;
  id = this.route.snapshot.paramMap.get('id');
  campoTexto: any;

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      comment: [null],
      cnpj: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.edit = true;
      this.supplierService.listId(this.id).subscribe((supplier) => {
        this.form.patchValue(supplier);
      });
    }
  }

  onSubmitForm(form: FormGroup): void {
    this.name = form.value.name;
    this.email = form.value.email;
    this.comment = form.value.comment;
    this.cnpj = form.value.cnpj;
    this.continue = true;

    if (Number(this.id) > 0) {
      this.callPut();
    } else {
      this.callPost();
    }
  }

  callPost() {
    this.supplierService.post(this.form.value).subscribe({
      next: () =>
        this.alertService.showAlert(
          'Fornecedor cadastrado com sucesso',
          'success',
          3000
        ),
      error: () =>
        this.alertService.showAlert(
          'Erro ao cadastrar fornecedor',
          'danger',
          3000
        ),
      complete: () => this.router.navigate(['list']),
    });
  }

  callPut() {
    this.supplierService.put(this.id, this.form.value).subscribe({
      next: () =>
        this.alertService.showAlert(
          'Fornecedor alterado com sucesso',
          'success',
          3000
        ),
      error: () =>
        this.alertService.showAlert(
          'Erro ao alterar fornecedor',
          'danger',
          3000
        ),
      complete: () => this.router.navigate(['list']),
    });
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
