from django.shortcuts import render
from ventas.models import Orden
import datetime
from collections import Counter
# to send the data through the AJAX request:
from django.http import JsonResponse

# Create your views here.

today = datetime.date.today()

estados_orden = [
    ('Nueva', 'Nueva'),
    ('Procesada', 'Procesada'),
    ('Pagada', 'Pagada'),
    ('Cancelada', 'Cancelada')
]

def SalesDashboard(request):

    template = "dashboard/sales_dashboard.html"

    sales_model = Orden.objects.filter(
        estado = estados_orden[2][0],
        fecha_creado__month=today.month
    ).values_list("creado_por__username", "total_mas_propina")

    sales_count_rep = Counter([rep[0] for rep in sales_model])

    sales_amount_rep = {}

    for rep in sales_count_rep:
        sales_amount_rep[rep] = 0
    
    for sale in sales_model:
        for rep in sales_amount_rep:
            if sale[0] == rep:
                sales_amount_rep += sale[1]
    
    if request.is_ajax():

        color = "rgba(53, 135, 164, 0.7)"
        color2 = "rgba(121, 67, 117, 0.7)"

        bar_color = []
        bar_color2 = []
        for s in range(len(sales_count_rep)):
            bar_color.append(color)
            bar_color2.append(color2)

        sales_count_chart_data = {
            "labels":list(sales_count_rep.keys()),
            "datasets": [{
                "label":"Sales by Rep Count"
                "data": list(sales_count_rep.values()),
                "backgroundColor": bar_color
            }]
        }

        sales_amount_chart_data = {
            "labels":list(sales_amount_rep.keys()),
            "datasets": [{
                "label":"Sales by Rep Count"
                "data": list(sales_amount_rep.values()),
                "backgroundColor": bar_color2
            }]
        }

        data_dict = {
            "sales_count_rep_chart_data": sales_count_chart_data,
            "sales_amount_chart_data": sales_amount_chart_data
        }

        return JsonResponse(data=data, safe=False)

    return render(request, template)
    # return render(request, 'sales_dashboard.html')