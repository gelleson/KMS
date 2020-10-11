from rest_framework.routers import DefaultRouter

from .views import ScopeModelViewSet, NoteModelViewSet

router = DefaultRouter()

router.register("scopes", ScopeModelViewSet)
router.register("scopes/(?P<scope_id>[0-9]+)/notes", NoteModelViewSet)
router.register("notes", NoteModelViewSet)

urlpatterns = router.urls
