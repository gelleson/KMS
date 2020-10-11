from rest_framework.viewsets import ModelViewSet

from pkg.permission import ContentOwnerPermission

from .models import Scope, Note, NoteVersionPoint
from .serializers import ScopeSerializer, NoteSerializer, NoteVersionPointSerializer


class ScopeModelViewSet(ModelViewSet):
    queryset = Scope.objects.none()
    serializer_class = ScopeSerializer
    permission_classes = (ContentOwnerPermission,)

    def get_queryset(self):
        return Scope.objects.filter(
            user=self.request.user,
        )


class NoteModelViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (ContentOwnerPermission,)

    def get_queryset(self):

        if self.kwargs.get("scope_id", None):
            return Note.objects.filter(
                user=self.request.user,
                scope_id=self.kwargs.get("scope_id"),
            )

        return Note.objects.filter(
            user=self.request.user,
        )

    def perform_update(self, serializer):
        note: Note = serializer.save()

        NoteVersionPoint.objects.create(
            owner=note.owner,
            scope=note.scope,
            uid=note.uid,
            created_at=note.created_at,
            content=note.content,
        )
