from django.contrib import admin
from .models import KamarModel, FasilitasModel,PesananModel

admin.site.register([KamarModel,PesananModel,FasilitasModel])
# Register your models here..
