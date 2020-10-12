import { Component, OnInit } from '@angular/core';
import {KnowledgeApiService} from "../../../../../api/src/lib/knowledge-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  ngOnInit() {
  }
}
