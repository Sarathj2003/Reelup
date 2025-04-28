from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True, blank=True, null=True)
    phone_number = models.CharField(max_length=10, unique=True, blank=True, null=True)

    def __str__(self):
        return self.username
