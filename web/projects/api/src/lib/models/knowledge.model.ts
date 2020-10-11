export interface Scope {
    id?:          number;
    name:        string;
    description: string;
    is_active?:   boolean;
    created_at?:  Date;
    updated_at?:  Date;
}

export interface Note {
    id?:         number;
    uid?:        string;
    name:       string;
    content:    string;
    version?:    number;
    is_active?:  boolean;
    created_at?: Date;
    scope?:      number;
    owner?:      number;
}

export interface NoteHistoryPoint {
    id?:         number;
    uid?:        string;
    name:       string;
    content:    string;
    version?:    number;
    is_active?:  boolean;
    created_at?: Date;
    archived_at?: Date;
    scope?:      number;
    owner?:      number;
}

export interface NoteSearchQuery {
  [key: string]: string
  scope?: string;
}
