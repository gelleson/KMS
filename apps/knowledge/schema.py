import graphene
from graphene import relay, Schema, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import Note


class NoteType(DjangoObjectType):
    class Meta:
        model = Note
        fields = '__all__'
        interfaces = (relay.Node, )
        filter_fields = {
            "content": ["exact"],
        }


class NoteQuery(object):
    note = relay.Node.Field(NoteType)
    notes = DjangoFilterConnectionField(NoteType)
