import { Component, OnInit } from '@angular/core';
import {KnowledgeApiService} from "../../../../../../../api/src/lib/knowledge-api.service";
import {ActivatedRoute} from "@angular/router";
import {Note, NoteHistoryPoint} from "../../../../../../../api/src/lib/models/knowledge.model";

@Component({
  selector: 'app-note-read',
  templateUrl: './note-read.component.html',
  styleUrls: ['./note-read.component.scss']
})
export class NoteReadComponent implements OnInit {

  loading = true;

  note: Note;

  revision: NoteHistoryPoint | null;

  id: string = this.routerSnapshot.snapshot.paramMap.get('id');

  revisionId = this.routerSnapshot.snapshot.paramMap.get('revisionId');

  constructor(private knowledgeApiService: KnowledgeApiService,
              private routerSnapshot: ActivatedRoute)
  {
  }
  ngOnInit(): void {
    if (this.revisionId) {
      this.knowledgeApiService
      .getRevision(this.id, this.revisionId)
      .subscribe((note) => {
        this.revision = note;
        this.loading = false;
      });
    } else {
      this.knowledgeApiService
      .getNote(+this.id)
      .subscribe(note => {
        this.note = note;
        this.loading = false;
      });
    }
  }

}
