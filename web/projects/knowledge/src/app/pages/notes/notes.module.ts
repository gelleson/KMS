import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteReadComponent } from './components/note-read/note-read.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import { RevisionComponent } from './components/revision/revision.component';
import {NzListModule} from "ng-zorro-antd/list";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {NzSpinModule} from "ng-zorro-antd/spin";


@NgModule({
  declarations: [NotesComponent, NoteReadComponent, NoteEditComponent, RevisionComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FroalaEditorModule,
    NzButtonModule,
    FroalaViewModule,
    FormsModule,
    NzInputModule,
    NzListModule,
    ScrollingModule,
    NzSpinModule,
  ]
})
export class NotesModule { }
