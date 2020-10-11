import { Component, OnInit } from '@angular/core';
import {KnowledgeApiService} from "../../../../../api/src/lib/knowledge-api.service";
import {Scope} from "../../../../../api/src/lib/models/knowledge.model";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  scopes: Scope[] = [];


  constructor(private knowledgeApiService: KnowledgeApiService) { }

  ngOnInit(): void {
    this.knowledgeApiService
      .getScopes()
      .subscribe(scopes => this.scopes = scopes);
  }

}
