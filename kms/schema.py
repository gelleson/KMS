import graphene
from apps.knowledge.schema import NoteQuery, NoteMutation


class Query(NoteQuery, graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")


class Mutation(NoteMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
