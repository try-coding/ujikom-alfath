from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import KamarSerializer,ListTypeSerializer,FasilitasSerializer, PesananSerializer
from hotel.models import KamarModel, FasilitasModel, PesananModel
# Create your views here.

@api_view(['get'])
def index (request):
    
    return Response({"welcome to my api for hotel apss"})

@api_view(['GET','POST','DELETE','PUT'])
def kamar_view (request):
    if request.method == "GET":
        delete = request.GET.get('delete')
        option = request.GET.get('option')

        if option == 'type' and delete == None:
            data_kamar = KamarModel.objects.values('tipe_kamar').distinct()
            serializer = ListTypeSerializer(data_kamar, many = True)
            
            return Response(serializer.data, status= status.HTTP_200_OK)
        


        else:
            data_kamar = KamarModel.objects.all()
            serializer = KamarSerializer(data_kamar, many = True)
            return Response(serializer.data, status= status.HTTP_200_OK)

    elif request.method == "POST":
        print(request.data)
        serializer = KamarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {
                'status' : 'Success Created',
                'data' : serializer.data
            }

            return Response(data, status=status.HTTP_201_CREATED)
        print (serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        deleteID= request.GET.get('delete')
        try:
            kamar = KamarModel.objects.get(id=deleteID)
            kamar.delete()
            return Response({f'deleted id {id}'},status=status.HTTP_200_OK)
        
        except KamarModel.DoesNotExist as err :
            return Response({'message':f'not found for {id}'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as err :
            return Response({'error': err})


    elif request.method == "PUT":
        data_update = request.data
        kamar = KamarModel.objects.get(id = data_update['id'])
        serializer = KamarSerializer(kamar, data=data_update, partial =True)
        if 'image' in data_update and data_update['image'] == "":
            data_update['image'] = kamar.image
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST','DELETE','PUT'])
def fasilitas_view(request):
    print(request.data)
    if request.method == 'GET':
        data = FasilitasModel.objects.all()
        serializer =FasilitasSerializer(data, many =True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    if request.method == 'POST':
        serializer = FasilitasSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
           
         
            data = {
                'status' : 'Success Created',
                'data' : serializer.data
            }

            return Response(data, status=status.HTTP_201_CREATED)
        return Response (serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
    if  request.method == 'DELETE':
        deleteID = request.GET.get('delete')
        try:
            fasilitas = FasilitasModel.objects.get(id=deleteID)
            fasilitas.delete()
            return Response(status=status.HTTP_200_OK)
        except fasilitas.DoesNotExist :
            return Response({'data tidak ditemukan'},status=status.HTTP_404_NOT_FOUND)
            
    if request.method == 'PUT':
        dataPut = request.data
        fasilitas = FasilitasModel.objects.get(id=dataPut['id'])
        serializer = FasilitasSerializer(fasilitas, data=dataPut ,partial =True)

        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data, status=status.HTTP_200_OK)
        print(serializer.error_messages)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET','POST'])
def pesanan_view(request):
    if request.method == 'GET':
        data = PesananModel.objects.all()
        serializer = PesananSerializer(data, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
    if request.method == 'POST':
        print(request.data)
        serializer = PesananSerializer(data = request.data)
     
        if serializer.is_valid():
            serializer.save()
         
            data = {
                'status' : 'Success Created',
                'data' : serializer.data
            }

            return Response(data, status=status.HTTP_201_CREATED)
        print(serializer.error_messages)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
