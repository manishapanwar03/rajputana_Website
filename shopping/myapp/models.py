from django.db import models


# Create your models here.
choice=(
    ('sare','sare'),
    ('poshak','poshak'),
    ('lehenga','lehenga'),
   
)

class Dress(models.Model):
    name=models.CharField(max_length=250,null=True,blank=True)
    description=models.TextField(null=True,blank=True)
    price = models.IntegerField(null=True,blank=True)
    type=models.CharField(max_length=250,choices=choice)
    image = models.ImageField(upload_to='dresses/', null=True, blank=True)
    def __str__(self):
        return self.name 
    

class Jewellry(models.Model):
    name=models.CharField(max_length=250,null=True,blank=True)
    description=models.TextField(null=True,blank=True)
    price = models.IntegerField(null=True,blank=True)
    image = models.ImageField(upload_to='dresses/', null=True, blank=True)
    def __str__(self):
        return self.name 