from rest_framework.serializers import ModelSerializer

from .models import Scope, Note, NoteVersionPoint


class ScopeSerializer(ModelSerializer):

    class Meta:
        model = Scope
        fields = "__all__"


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = "__all__"


class NoteVersionPointSerializer(ModelSerializer):
    class Meta:
        model = NoteVersionPoint
        fields = "__all__"
