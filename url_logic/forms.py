from django import forms

class UrlForm(forms.Form):
    #url = forms.URLField(label='Enter URL', max_length=200)
    CHOICES = [
        ('auto', 'Generate automatically'),
        ('manual', 'Enter manually'),
    ]
    
    url = forms.URLField(label='Enter URL', max_length=200, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Default URL'}))
    shortcut_option = forms.ChoiceField( choices=CHOICES, widget=forms.RadioSelect(attrs={ 'class':'form-check-input', 'type':'radio'}))
    shortcut_url = forms.CharField(label='Enter URL', max_length=200, required=False, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Custom shortener'}))
