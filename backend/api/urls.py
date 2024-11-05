from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('kamar/',kamar_view, name="kamar"),
    path('fasilitas/',fasilitas_view, name="fasilitas"),
    path('pesanan/', pesanan_view, name="pesanan")
]



