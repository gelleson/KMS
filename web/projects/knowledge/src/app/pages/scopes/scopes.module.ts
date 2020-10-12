import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScopesRoutingModule } from './scopes-routing.module';
import { ScopesComponent } from './scopes.component';
import {SharedKnowledgeModule} from "../../shared-knowledge/shared-knowledge.module";


@NgModule({
  declarations: [ScopesComponent],
  imports: [
    CommonModule,
    ScopesRoutingModule,
    SharedKnowledgeModule
  ]
})
export class ScopesModule { }
