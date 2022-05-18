from django.shortcuts import render
from .forms import CreatePollForm
from .models import Poll

# Create your views here.

def home(request):
    context = {}
    return render(request, 'polls2/home.html', context)

def create(request):
    form = CreatePollForm()
    context = {
        'form': form
    }
    return render(request, 'polls2/create.html', context)

def vote(request, poll_id):
    context = {}
    return render(request, 'polls2/vote.html', context)

def results(request, poll_id):
    context = {}
    return render(request, 'polls2/results.html', context)

