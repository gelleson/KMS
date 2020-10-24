import graphene
from apps.knowledge.schema import NoteQuery


class Query(NoteQuery, graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")


schema = graphene.Schema(query=Query, mutation=None)
