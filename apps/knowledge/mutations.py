from base64 import decode

import graphene
from graphene import Mutation, Field

from apps.knowledge.type import NoteType
from apps.knowledge.services.note import NoteService


class NoteCreateMutation(Mutation):
    note = Field(NoteType)

    class Arguments:
        # The input arguments for this mutation
        scope = graphene.ID(required=True)
        name = graphene.String(required=True)
        content = graphene.String(required=True)

    def mutate(self, info, scope, name, content):
        note = NoteService.create(1, scope, name, content)

        return NoteCreateMutation(note=note)


class NoteUpdateMutation(Mutation):
    note = Field(NoteType)

    class Arguments:
        id = graphene.ID(required=True)
        name = graphene.String(required=False)
        content = graphene.String(required=False)

    def mutate(self, info, id, name, content):

        note = NoteService.update_note(id, name, content)

        return NoteUpdateMutation(note=note)