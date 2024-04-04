from rest_framework import serializers

from . models import *
class  DressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dress
        fields='__all__'

class JewellerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Jewellery
        fields = '__all__'
        
        
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=SingUser
        fields = ['username', 'password', 'email']
        extra_kwargs={'password': {'write_only':True}}


    def create(self, validated_data):
        user = SingUser(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()