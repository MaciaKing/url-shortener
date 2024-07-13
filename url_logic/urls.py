from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('custom_urls', views.get_all_custom_urls, name='custom_urls'),
    path('drop_custom_url', views.drop_custom_url, name='drop_custom_url')
]
