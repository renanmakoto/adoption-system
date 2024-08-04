# pet/models.py
from django.db import models

class Pet(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    history = models.TextField(blank=False, null=False)
    photo = models.URLField(blank=False, null=False)

    def __str__(self):
        return self.name
