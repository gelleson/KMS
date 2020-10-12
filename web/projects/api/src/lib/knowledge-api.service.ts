import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "./tokens";
import {Note, Scope, NoteSearchQuery, NoteHistoryPoint} from "./models/knowledge.model";
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

  getScope(scope: number): Observable<Scope> {
    return this.http.get<Scope>(
      `${this.baseUrl}/knowledge/scopes/${scope}/`,
    );
  }

  createScope(scope: Scope): Observable<Scope> {
    return this.http.post<Scope>(
      `${this.baseUrl}/knowledge/scopes/`,
          scope,
    )
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

  getNote(note: number): Observable<Note> {
    return this.http.get<Note>(
        `${this.baseUrl}/knowledge/notes/${note}/`
      );
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(
      `${this.baseUrl}/knowledge/notes/`,
      note
    )
  }

  updateNote(id: number, note: Note): Observable<Note> {
    return this.http.put<Note>(
      `${this.baseUrl}/knowledge/notes/${id}/`,
      note
    )
  }

  getRevisions(id: string): Observable<NoteHistoryPoint[]> {
    return this.http.get<NoteHistoryPoint[]>(
      `${this.baseUrl}/knowledge/notes/${id}/revision/`
    )
  }

  getRevision(id: string, revision: string): Observable<NoteHistoryPoint> {
    return this.http.get<NoteHistoryPoint>(
      `${this.baseUrl}/knowledge/notes/${id}/revision/${revision}/`
    )
  }


}
