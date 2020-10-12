import { Component, OnInit } from '@angular/core';
import {KnowledgeApiService} from "../../../../../../../api/src/lib/knowledge-api.service";
import {ActivatedRoute} from "@angular/router";
import {NoteHistoryPoint} from "../../../../../../../api/src/lib/models/knowledge.model";

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.scss']
})
export class RevisionComponent implements OnInit {

  versions: NoteHistoryPoint[];

  id: string = this.routerSnapshot.snapshot.paramMap.get('id');

  constructor(private knowledgeApiService: KnowledgeApiService,
              private routerSnapshot: ActivatedRoute)
  {
  }
  ngOnInit(): void {
    this.knowledgeApiService
      .getRevisions(this.id)
      .subscribe(v => this.versions = v);
  }

}
