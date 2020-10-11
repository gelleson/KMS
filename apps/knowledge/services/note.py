from ..models import Note, NoteVersionPoint


class NoteService:

    @staticmethod
    def update_note(note: Note) -> NoteVersionPoint:
        note.version += 1

        note.save()

        return NoteVersionPoint.objects.create(
            owner=note.owner,
            scope=note.scope,
            name=note.name,
            version=note.version,
            uid=note.uid,
            created_at=note.created_at,
            content=note.content,
        )
