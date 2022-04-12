from unittest.util import _MAX_LENGTH
from django.db import models
from sre_parse import Verbose

# Create your models here.

class Person(models.Model):
    name = models.Charfield(max_Length=30)
    country = models.ForeignKey('Country', on_delete=models.CASCADE)
    city = models.ForeignKey('City', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Country(models.Model):
    name = models.Charfield(max_Length=15)

    def __str__(self):
        return self.name

class City(models.Model):
    name = models.CharField(max_Length=15)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
