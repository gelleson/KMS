from rest_framework.viewsets import ModelViewSet

from pkg.permission import ContentOwnerPermission

from .models import Scope
from .serializers import ScopeSerializer


class ScopeModelViewSet(ModelViewSet):
    queryset = Scope.objects.none()
    serializer_class = ScopeSerializer
    permission_classes = (ContentOwnerPermission,)

    def get_queryset(self):
        return Scope.objects.filter(
            user=self.request.user,
        )
