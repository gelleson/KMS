import {Component, Input, OnInit} from '@angular/core';
import {Scope} from '../../../../../../../api/src/lib/models/knowledge.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scope-small-card',
  templateUrl: './scope-small-card.component.html',
  styleUrls: ['./scope-small-card.component.scss']
})
export class ScopeSmallCardComponent implements OnInit {
  @Input()
  scope!: Scope;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route() {
    this.router
      .navigate(["scopes", this.scope.id])
      .then();
  }
}
