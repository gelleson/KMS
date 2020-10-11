import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopeSmallCardComponent } from './ui/scopes/scope-small-card/scope-small-card.component';
import { ScopeListComponent } from './ui/scopes/scope-list/scope-list.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {MatRippleModule} from "@angular/material/core";
import {ScopeSmallAddCardComponent} from "./ui/scopes/scope-small-add-card/scope-small-add-card.component";
import { NotesOverviewComponent } from './ui/notes/notes-overview/notes-overview.component';
import {NzListModule} from "ng-zorro-antd/list";



@NgModule({
  declarations: [ScopeSmallCardComponent, ScopeListComponent, ScopeSmallAddCardComponent, NotesOverviewComponent],
  exports: [
    ScopeListComponent,
    NotesOverviewComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    MatRippleModule,
    NzListModule,
  ]
})
export class SharedKnowledgeModule { }
