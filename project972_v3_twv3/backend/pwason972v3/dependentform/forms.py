from socket import fromshare
from django import forms
from .models import Person, City


# saving of data from FrontEnd to the DB:

class PersonForm(forms.ModelForm):
    class Meta:
        model = Person
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['city'].queryset = City.objects.none()