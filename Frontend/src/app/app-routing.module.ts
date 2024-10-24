import { SuppliersDeleteComponent } from './supplier/suppliers-delete/suppliers-delete.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersFormComponent } from './suppliers/suppliers-form/suppliers-form.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "list", component: SuppliersListComponent},
  {path: "form", component: SuppliersFormComponent},
  {path: "edit/:id", component: SuppliersFormComponent},
  {path: "delete/:id", component: SuppliersDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
