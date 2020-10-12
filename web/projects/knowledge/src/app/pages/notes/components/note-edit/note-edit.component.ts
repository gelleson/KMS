import { Component, OnInit } from '@angular/core';
import {Note} from "../../../../../../../api/src/lib/models/knowledge.model";
import {KnowledgeApiService} from "../../../../../../../api/src/lib/knowledge-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  note: Note;

  content: string;

  loaded = false;

  id: string = this.routerSnapshot.snapshot.paramMap.get('id');

  public options: Object = {
  }

  constructor(private knowledgeApiService: KnowledgeApiService,
              private routerSnapshot: ActivatedRoute,
              private router: Router)
  {
  }
  ngOnInit(): void {
    this.knowledgeApiService
      .getNote(+this.id)
      .subscribe(note => {
        this.note = note;
        this.content = this.note?.content;
        this.loaded = true;
      });
  }

  save() {

    this.note.content = this.content;

    this.knowledgeApiService
      .updateNote(+this.id, this.note)
      .subscribe(async () => {
        await this.router.navigateByUrl(`/notes/${this.id}`)
      });
  }
}
