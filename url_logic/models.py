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
    def generate_random_custom_url():
        letters = string.ascii_lowercase  # 'abcdefghijklmnopqrstuvwxyz'
        while True:
            random_custom_url = ''.join(random.choice(letters) for _ in range(4))
            if not CustomUrl.objects.filter(custom_url=random_custom_url).exists():
                return random_custom_url
