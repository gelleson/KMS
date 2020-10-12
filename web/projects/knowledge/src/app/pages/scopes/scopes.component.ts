import { Component, OnInit } from '@angular/core';
import {KnowledgeApiService} from "../../../../../api/src/lib/knowledge-api.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Note, Scope} from "../../../../../api/src/lib/models/knowledge.model";

@Component({
  selector: 'app-scopes',
  templateUrl: './scopes.component.html',
  styleUrls: ['./scopes.component.scss']
})
export class ScopesComponent implements OnInit {
  scope: Scope;
  notes: Note[];

  id: string = this.routerSnapshot.snapshot.paramMap.get('id');

  constructor(private knowledgeApiService: KnowledgeApiService,
              private routerSnapshot: ActivatedRoute)
  {
  }

  ngOnInit(): void {
    this.knowledgeApiService
      .getScope(+this.id)
      .subscribe(scope => this.scope = scope)
    this.knowledgeApiService
      .getNotes(+this.id)
      .subscribe(notes => this.notes = notes)
  }

}
