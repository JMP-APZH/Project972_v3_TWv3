from django.shortcuts import render

# Create your views here.

def SalesDashboard(request):

    template = "dashboard/sales_dashboard.html"

    return render(request, template)
    # return render(request, 'sales_dashboard.html')