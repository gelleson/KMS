import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesComponent} from "./notes.component";
import {NoteReadComponent} from "./components/note-read/note-read.component";
import {NoteEditComponent} from "./components/note-edit/note-edit.component";
import {RevisionComponent} from "./components/revision/revision.component";

const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      {
        path: ':id',
        component: NoteReadComponent,
      },
      {
        path: ':id/edit',
        component: NoteEditComponent,
      },
      {
        path: ':id/revision',
        component: RevisionComponent,
      },
      {
        path: ':id/revision/:revisionId',
        component: NoteReadComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
