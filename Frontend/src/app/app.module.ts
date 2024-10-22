import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { BtnHomeComponent } from './components/btn-home/btn-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SuppliersFormComponent } from './suppliers/suppliers-form/suppliers-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SuppliersDeleteComponent } from './supplier/suppliers-delete/suppliers-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuppliersListComponent,
    BtnHomeComponent,
    SuppliersFormComponent,
    AlertComponent,
    SuppliersDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
