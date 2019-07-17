import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from  '../admin/admin-routing/admin-routing.module';
import { MaterialModule } from '../material-module';
import { HttpService} from '../services/http.service'
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyerFormComponent } from './buyer/buyer-form/buyer-form.component';
import { BuyerListComponent } from './buyer/buyer-list/buyer-list.component';
import { ContainerComponent } from './container/container.component';
import { SellerListComponent } from '../seller/seller-list/seller-list.component';

@NgModule({
  declarations: [DashboardComponent, BuyerFormComponent, BuyerListComponent, ContainerComponent, SellerListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
})
export class AdminModule { }
