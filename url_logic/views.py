from django.shortcuts import render
from .forms import UrlForm
from .models import CustomUrl
from django.http import JsonResponse
import ipdb

# Create your views here.
def index(request):
    if request.method == 'POST':
        if request.POST['shortcut_option'] == 'auto':
            # Generate automatic url
            custom_url = CustomUrl().generate_random_custom_url()
        else:
            # get shortcut url
            custom_url = request.POST['shortcut_url']
        try:
            #ipdb.set_trace()
            custom_urls = CustomUrl.objects.all()
            form = UrlForm
            CustomUrl().save_url(custom_url, request.POST['url'])
        except:
            return render(request, 'index.html', {'form': form, 'custom_urls': custom_urls, 'exception': True})
        
    custom_urls = CustomUrl.objects.all()
    form = UrlForm
    return render(request, 'index.html', {'form': form, 'custom_urls': custom_urls, 'exception': False})

def get_all_custom_urls(request):
    custom_urls = list(CustomUrl.objects.values())
    return JsonResponse(custom_urls, safe=False)

def redirect(request):
    ipdb.set_trace()
    None
