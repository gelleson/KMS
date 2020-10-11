from uuid import uuid4

from django.db import models
from django.contrib.auth import get_user_model


class Colors(models.TextChoices):
    SILVER = "#CDD3D5"
    GREEN = "#77CBB9"
    BLUE = "#75B8C8"
    RED = "#A8201A"


class Scope(models.Model):

    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    name = models.CharField(max_length=255)
    description = models.TextField()
    color_card = models.CharField(max_length=255, null=True, blank=True)

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class NoteBase(models.Model):

    scope = models.ForeignKey(Scope, on_delete=models.CASCADE)
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    uid = models.UUIDField(default=uuid4())

    name = models.CharField(max_length=255)
    content = models.TextField()
    version = models.IntegerField(default=0)

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class Note(NoteBase):

    class Meta:
        ordering = ['-updated_at', '-created_at']


class NoteVersionPoint(NoteBase):
    archived_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-version']

    def __str__(self):
        return f"{self.name} - {self.version}"

