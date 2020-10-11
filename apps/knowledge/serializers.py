from rest_framework.serializers import ModelSerializer, HiddenField, CurrentUserDefault

from .models import Scope, Note, NoteVersionPoint


class ScopeSerializer(ModelSerializer):
    owner = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Scope
        fields = "__all__"


class NoteSerializer(ModelSerializer):
    owner = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Note
        fields = "__all__"
        extra_kwargs = {
            "uid": {
                "read_only": True,
            },
            "version": {
                "read_only": True,
            },
        }


class NoteVersionPointSerializer(ModelSerializer):
    class Meta:
        model = NoteVersionPoint
        fields = "__all__"
