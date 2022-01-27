from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

def user_directory_path(instance, filename):
    return f'user/{instance.id}/{filename}'

class User(AbstractUser):

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    first_name = models.CharField(max_length=50, blank=False, null=False)
    last_name = models.CharField(max_length=50, blank=False, null=False)
    mobile = models.CharField(max_length=50, blank=False, null=False)
    description = models.TextField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)

    password = models.CharField(max_length=50, blank=False, null=False)
    
    # could it be automated?
    # location = models.CharField(max_length=50, blank=True, null=True)
    
    # twitter_access_token = models.CharField(max_length=255, blank=True, null=True)
    # twitter_access_token_secret = models.CharField(max_length=255, blank=True, null=True)
    
    # linked_in_auth_code = models.CharField(max_length=500, blank=True, null=True)
    # linked_in_access_token = models.CharField(max_length=500, blank=True, null=True)
    
    # darkmode = models.TextField(blank=True, null=True)
    # dashboard = models.TextField(blank=True, null=True)
    
    # theme_colors = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.email
