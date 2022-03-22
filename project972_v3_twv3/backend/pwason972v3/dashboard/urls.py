from django.urls import path
from . import views

app_name = "dashboard"

urlpatterns = [
    path(
     'sales_dashboard/', views.SalesDashboard, name='sales_dashboard'
    )
]
 
