from django.contrib.auth import views as auth_views
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('custom_urls', views.get_all_custom_urls, name='custom_urls')
]
