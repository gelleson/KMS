import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import {SharedKnowledgeModule} from "../../shared-knowledge/shared-knowledge.module";


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedKnowledgeModule,
  ]
})
export class OverviewModule { }
