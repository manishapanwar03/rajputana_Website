from rest_framework import serializers

from . models import *
class  DressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dress
        fields='__all__'

class JewellerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Jewellry
        fields = '__all__'