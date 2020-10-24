from graphene import relay
from graphene_django.filter import DjangoFilterConnectionField

from apps.knowledge.type import NoteType
from apps.knowledge.mutations import NoteCreateMutation, NoteUpdateMutation


class NoteQuery(object):
    note = relay.Node.Field(NoteType)
    notes = DjangoFilterConnectionField(NoteType)


class NoteMutation(object):
    create_note = NoteCreateMutation.Field()
    update_note = NoteUpdateMutation.Field()
