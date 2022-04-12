from django.shortcuts import render
import json
from .forms import PersonForm
from django.http import JsonResponse
from .models import City

# Create your views here.

def person(request):
