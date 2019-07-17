import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../container/container.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BuyerFormComponent } from '../buyer/buyer-form/buyer-form.component';
import { BuyerListComponent } from '../buyer/buyer-list/buyer-list.component';

const  routes:  Routes  = [
  {
    path:  'admin',
    component:  ContainerComponent,
    children: [
      {
        path:  'dashboard',
        component:  DashboardComponent
      },
      {
        path:  'list',
        component:  BuyerListComponent
      },
      {
        path:  'new',
        component:  BuyerFormComponent
      },
    ]
  }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export  class  AdminRoutingModule { }