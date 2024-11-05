from rest_framework import serializers
from hotel.models import KamarModel, FasilitasModel, PesananModel





class KamarSerializer (serializers.ModelSerializer):
    class Meta:
        model = KamarModel
        fields = ['id','nama_kamar', 'jumlah_kamar','price','fasilitas','image']
        
        
class FasilitasSerializer(serializers.ModelSerializer):
    class Meta:
        model = FasilitasModel
        fields = '__all__'

class PesananSerializer(serializers.ModelSerializer):
    nama_kamar = serializers.PrimaryKeyRelatedField(queryset=KamarModel.objects.all())
    class Meta:
        model = PesananModel
        fields = ['nama_lengkap', 'email','no_handphone','nama_kamar','check_in','check_out']



class ListTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = KamarModel
        fields = ['nama_kamar']