from rest_framework.routers import DefaultRouter

from .views import ScopeModelViewSet, NoteModelViewSet, NoteVersionReadViewSet

router = DefaultRouter()

router.register("scopes", ScopeModelViewSet)
router.register("scopes/(?P<scope_id>[0-9]+)/notes", NoteModelViewSet)
router.register("notes", NoteModelViewSet)
router.register("notes/(?P<uid>[0-9a-f-]+)/revision", NoteVersionReadViewSet)

urlpatterns = router.urls
