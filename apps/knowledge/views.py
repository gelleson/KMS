from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from pkg.permission import ContentOwnerPermission

from .services import note
from .models import Scope, Note, NoteVersionPoint
from .serializers import ScopeSerializer, NoteSerializer, NoteVersionPointSerializer


class ScopeModelViewSet(ModelViewSet):
    queryset = Scope.objects.none()
    serializer_class = ScopeSerializer
    permission_classes = (ContentOwnerPermission,)

    def get_queryset(self):
        return Scope.objects.filter(
            owner=self.request.user,
        )


class NoteModelViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (ContentOwnerPermission,)

    def get_queryset(self):
        if self.kwargs.get("scope_id", None):
            return Note.objects.filter(
                owner=self.request.user,
                scope_id=self.kwargs.get("scope_id"),
            )

        return Note.objects.filter(
            owner=self.request.user,
        )

    def perform_update(self, serializer):
        note.update_note(serializer.save())


class NoteVersionReadViewSet(ReadOnlyModelViewSet):
    queryset = NoteVersionPoint.objects.none()
    serializer_class = NoteVersionPointSerializer

    def get_queryset(self):
        return NoteVersionPoint.objects.filter(
            owner=self.request.user,
            uid=self.kwargs.get('uid'),
        )
