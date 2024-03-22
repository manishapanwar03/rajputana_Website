from django.shortcuts import render,get_object_or_404
from rest_framework.decorators import APIView
from . serialzers import *
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class  CreateDress(APIView):
    def post(self,request):
        data = request.data
        serializer = DressSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            info = Dress.objects.get(id=serializer.data['id'])
            info.image = image_
            info.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def get(self,request,pk=None):
        # import pdb;pdb.set_trace()
        if pk is not None:
            obj=get_object_or_404(Dress,pk=pk)
            serilaizer = DressSerializer(obj)
            return Response(serilaizer.data,status=status.HTTP_200_OK)
        else:
            queryset = Dress.objects.all()
            serilaizer = DressSerializer(queryset,many=True)
            return Response(serilaizer.data,status=status.HTTP_200_OK )
        
    def patch(self,request,pk):
        queryset=Dress.objects.get(pk=pk)
        serializer=DressSerializer(queryset,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
        obj=Dress.objects.get(pk=pk)
        obj.delete()
        return Response({"staus":"Delete item sucessfully"})

class  CreateJwellery(APIView):
    def post(self,request):
        data = request.data
        serializer = JewellerySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK )
        return Response(serializer.errors)
    
    def get(self,request,pk=None):
        if pk is not None:
            obj = get_object_or_404(Jewellry)
            serializer = JewellerySerializer(obj)
            return Response(serializer.data,status=status.HTTP_200_OK )
        else:
            queryset = Jewellry.objects.all()
            serializer = JewellerySerializer(queryset,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK )
        
    
    def patch(self,request,pk):
        queryset=Jewellery.objects.get(pk=pk)
        serializer=JewellerySerializer(queryset,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors)
        
    def delete(self,request,pk):
        obj=Jewellery.objects.get(pk=pk)
        obj.delete()
        return Response({"status":"Deletee sucessfully"})
    
