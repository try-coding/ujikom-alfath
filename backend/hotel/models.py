from django.db import models
from os.path import join, splitext


def kamar_file (instance, filename):
    print (f"object is {instance.nama_kamar}")
    [nama_file, ext] =  splitext(filename)
    nama_baru = f"{instance.nama_kamar}{ext}"
    return join('img/',nama_baru)
    

    
class KamarModel(models.Model):
    nama_kamar = models.CharField(max_length=200)
    jumlah_kamar = models.IntegerField()
    price = models.IntegerField()
    fasilitas = models.CharField(max_length=250)
    image = models.ImageField(upload_to=kamar_file, default="img/default.jpg")

    def __str__(self) -> str:
        return self.nama_kamar

class FasilitasModel (models.Model):
    nama_fasilitas = models.CharField(max_length=100)
    deskripsi = models.TextField()
    image = models.ImageField(upload_to="fasilitas", null=True, blank=True )

    def __str__(self) :
        return self.nama_fasilitas
    
class PesananModel(models.Model):
    nama_lengkap = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
    no_handphone = models.CharField(max_length=13)
    nama_kamar = models.ForeignKey(KamarModel, on_delete=models.CASCADE)
    check_in = models.DateField()
    check_out = models.DateField()


    def __str__(self):
        return f"{self.tipe_kamar} for {self.nama_lengkap}"