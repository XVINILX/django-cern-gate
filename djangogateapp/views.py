import json
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.

def home_view(request):
    context ={}
    return render(request, "shapes/main.html", context)



def save_scene(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        # Process the data here (e.g., save to database)
        print(data)  # For debugging purposes

        # Return a JSON response
        return JsonResponse({'status': 'success', 'data': data})
    else:
        return JsonResponse({'status': 'fail', 'message': 'Invalid method'}, status=400)