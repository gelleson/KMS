import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScopesComponent} from "./scopes.component";

const routes: Routes = [
  {
    path: ':id',
    component: ScopesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScopesRoutingModule { }
