from django.utils.timezone import now

from ..models import Note, NoteVersionPoint


class NoteService:

    @staticmethod
    def update_note(note: Note) -> NoteVersionPoint:
        """
        Updates model and incr version of the Note. After create NoteVersionPoint entry to keep history of the document
        :param note:
        :return:
        """
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
