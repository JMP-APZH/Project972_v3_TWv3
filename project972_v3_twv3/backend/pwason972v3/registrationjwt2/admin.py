from django.contrib import admin

# Register your models here.

from registrationjwt2.models import RegistrationProfile

admin.site.register(RegistrationProfile)
