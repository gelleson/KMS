from uuid import uuid4

from django.db import models
from django.contrib.auth import get_user_model


class Scope(models.Model):

    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    name = models.CharField(max_length=255)
    description = models.TextField()

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Note(models.Model):

    scope = models.ForeignKey(Scope, on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    uid = models.UUIDField(default=uuid4())

    name = models.CharField(max_length=255)
    content = models.TextField()
    version = models.IntegerField(default=0)

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class NoteVersionPoint(Note):
    archived_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.version}"
