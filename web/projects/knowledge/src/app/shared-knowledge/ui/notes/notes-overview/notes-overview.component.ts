import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../../../../../../api/src/lib/models/knowledge.model";

@Component({
  selector: 'app-notes-overview',
  templateUrl: './notes-overview.component.html',
  styleUrls: ['./notes-overview.component.scss']
})
export class NotesOverviewComponent implements OnInit {

  @Input()
  notes: Note[];

  constructor() { }

  ngOnInit(): void {
  }

}
