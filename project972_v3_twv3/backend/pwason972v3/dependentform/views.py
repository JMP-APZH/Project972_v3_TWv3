from django.shortcuts import redirect, render
import json
from .forms import PersonForm
from django.http import JsonResponse
from .models import Person, Country, City 

# Create your views here.

def person(request):
    data = City.objects.all()
    if request.method == 'POST':
        form = PersonForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = PersonForm()
    
    context = {
        'data': data,
        'form': form,
    }
    return render(request, 'person.html', context)

def getCities(request):
    data = json.loads(request.body)
    country_id = data['id']
    print(country_id)
    cities = City.objects.filter(country__id=country_id)
    return JsonResponse(list(cities.values('id', 'name')), safe=False)

# def cities(request):
#     data = json.loads(request.body)
#     cities = City.objects.filter(country_id=data['user_id'])
#     print(cities)
#     return JsonResponse(list(cities.values("id", "name")), safe=False)

