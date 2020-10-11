import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./tokens";
import {Note, Scope, NoteSearchQuery} from "./models/knowledge.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KnowledgeApiService {

  constructor(@Inject(BASE_URL) readonly baseUrl: string, private http: HttpClient) {
  }

  getScopes(): Observable<Scope[]> {
    return this.http.get<Scope[]>(
      `${this.baseUrl}/knowledge/scopes/`,
    );
  }

  getNotes(scope?: number, search?: NoteSearchQuery): Observable<Note[]> {
    if (!scope) {
      return this.http.get<Note[]>(
        `${this.baseUrl}/knowledge/notes/`,
        {
          params: search,
        }
      );
    }

    return this.http.get<Note[]>(
      `${this.baseUrl}/knowledge/scopes/${scope}/notes/`
    );
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(
      `${this.baseUrl}/knowledge/notes/`,
      note
    )
  }

  updateNote(id: number, note: Note): Observable<Note> {
    return this.http.post<Note>(
      `${this.baseUrl}/knowledge/notes/${id}/`,
      note
    )
  }

}
