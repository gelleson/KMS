from django.contrib import admin

from .models import Scope, Note, NoteVersionPoint


admin.site.register(Scope)
admin.site.register(Note)
admin.site.register(NoteVersionPoint)
