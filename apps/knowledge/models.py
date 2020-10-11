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
