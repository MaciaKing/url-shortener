from django.db import models
import random
import string
import ipdb

class CustomUrl(models.Model):
    url = models.CharField(max_length=100)
    custom_url = models.URLField(default='', blank=True, primary_key=True)

    def __str__(self):
        return self.url
    
    @staticmethod
    def save_url(custom_url, url):
        if CustomUrl.objects.filter(custom_url=custom_url).exists():
            raise Exception("Custom url already exist")
        else:
            cm = CustomUrl(
                custom_url = custom_url,
                url = url
            )
            cm.save()

    @staticmethod
    def generate_random_custom_url():
        letters = string.ascii_lowercase  # 'abcdefghijklmnopqrstuvwxyz'
        return''.join(random.choice(letters) for _ in range(4))  # Genera una cadena aleatoria de 4 letras minúsculas
