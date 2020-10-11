from rest_framework.viewsets import ModelViewSet

from .models import Scope
from .serializers import ScopeSerializer


class ScopeModelViewSet(ModelViewSet):
    queryset = Scope.objects.none()
    serializer_class = ScopeSerializer

    def get_queryset(self):
        return Scope.objects.filter(
            user=self.request.user,
        )
