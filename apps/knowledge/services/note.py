from typing import Union
from django.utils.timezone import now

from ..models import Note, NoteVersionPoint


class NoteService:

    @staticmethod
    def update_note(note: Union[Note, int], name: str = None, content: str = None) -> NoteVersionPoint:
        """
        Updates model and incr version of the Note. After create NoteVersionPoint entry to keep history of the document
        :param content:
        :param name:
        :param note:
        :return:
        """

        if isinstance(note, int):
            note = Note.objects.get(pk=note)

        if isinstance(note, str):
            note = Note.objects.get(pk=int(note))

        if name:
            note.name = name

        if content:
            note.content = content

        note.version += 1

        NoteVersionPoint.objects.create(
            owner=note.owner,
            scope=note.scope,
            name=note.name,
            version=note.version,
            uid=note.uid,
            created_at=note.created_at,
            content=note.content,
        )

        note.save()

        return note


    @staticmethod
    def create(user_id: int, scope_id: int, name: str, text: str) -> Note:
        return Note.objects.create(
            name=name,
            version=1,
            content=text,
            scope_id=scope_id,
            owner_id=user_id,
        )
