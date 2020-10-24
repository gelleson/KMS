from graphene import relay
from graphene_django import DjangoObjectType

from apps.knowledge.models import Note


class NoteType(DjangoObjectType):

    class Meta:
        model = Note
        fields = '__all__'
        interfaces = (relay.Node, )
        filter_fields = {
            "content": ["exact"],
        }

