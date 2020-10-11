import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopeSmallCardComponent } from './ui/scopes/scope-small-card/scope-small-card.component';
import { ScopeListComponent } from './ui/scopes/scope-list/scope-list.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {MatRippleModule} from "@angular/material/core";
import {ScopeSmallAddCardComponent} from "./ui/scopes/scope-small-add-card/scope-small-add-card.component";



@NgModule({
  declarations: [ScopeSmallCardComponent, ScopeListComponent, ScopeSmallAddCardComponent],
  exports: [
    ScopeListComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    MatRippleModule,
  ]
})
export class SharedKnowledgeModule { }
