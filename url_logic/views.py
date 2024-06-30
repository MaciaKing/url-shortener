from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from .forms import UrlForm
from .models import CustomUrl
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
        cm = CustomUrl(
            custom_url = custom_url,
            url = request.POST['url']
        )
        cm.save()
    form = UrlForm
    return render(request, 'index.html', {'form': form})
