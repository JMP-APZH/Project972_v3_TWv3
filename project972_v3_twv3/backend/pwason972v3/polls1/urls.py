from django.urls import path
from . import views

# url mapping for the views

urlpatterns = [
    path('', views.index, name = 'index'),
    # path('vote', views.vote, name = 'vote'),
    # path('result', views.result, name = 'result'),
    path('vote/<str:pk>', views.vote, name = 'vote'),
    path('result/<str:pk>', views.result, name = 'result'),
]