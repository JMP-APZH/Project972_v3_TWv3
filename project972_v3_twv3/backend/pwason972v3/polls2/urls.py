from django.urls import path
from . import views as polls2_views

urlpatterns = [
    path('home-polls2/', polls2_views.home, name = 'home-polls2'),
    path('create/', polls2_views.create, name = 'create'),
    path('vote/<poll_id>/', polls2_views.vote, name = 'vote'),
    path('results/<poll_id>/', polls2_views.results, name = 'results'),

]