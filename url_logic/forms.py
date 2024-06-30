from django import forms

class UrlForm(forms.Form):
    #url = forms.URLField(label='Enter URL', max_length=200)
    CHOICES = [
        ('auto', 'Generate automatically'),
        ('manual', 'Enter manually'),
    ]
    
    url = forms.URLField(label='Enter URL', max_length=200)
    shortcut_option = forms.ChoiceField( choices=CHOICES, widget=forms.RadioSelect)
    shortcut_url = forms.CharField(label='Custom Shortcut URL', max_length=100, required=False)