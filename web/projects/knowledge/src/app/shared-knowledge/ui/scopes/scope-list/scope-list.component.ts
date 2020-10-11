import {Component, Input, OnInit} from '@angular/core';
import {Scope} from "../../../../../../../api/src/lib/models/knowledge.model";

@Component({
  selector: 'app-scope-list',
  templateUrl: './scope-list.component.html',
  styleUrls: ['./scope-list.component.scss']
})
export class ScopeListComponent implements OnInit {
  @Input()
  scopes: Scope[];

  @Input()
  withTitle: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
