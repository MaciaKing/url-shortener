from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_protect
from .forms import UrlForm
import ipdb

# Create your views here.
def index(request):
    if request.method == 'POST':
        ipdb.set_trace()
        if request.POST['shortcut_option'] == 'auto':
            # Generate automatic url
            None
        else:
            # get shortcut url
            None
        # request.POST #accedemos a los parametros de nuestro form
        return HttpResponse('HOLA')
    else:
        form = UrlForm
        return render(request, 'index.html', {'form': form})
