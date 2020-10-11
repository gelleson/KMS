import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Note, Scope} from "../../../../../../../api/src/lib/models/knowledge.model";

@Component({
  selector: 'app-notes-overview',
  templateUrl: './notes-overview.component.html',
  styleUrls: ['./notes-overview.component.scss']
})
export class NotesOverviewComponent implements OnInit, OnChanges {

  @Input()
  notes: Note[];

  @Input()
  scopes?: Scope[];

  scopeMap: Map<number, Scope> = new Map<number, Scope>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.scopes.forEach(scope => {
      this.scopeMap.set(scope.id, scope);
    })

  }

  ngOnInit(): void {

  }
}
