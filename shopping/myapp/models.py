from django.db import models


# Create your models here.
choice=(
    ('SAREE','SAREE'),
    ('POSHAK','POSHAK'),
    ('LEHENGA','LEHENGA'),
    ('SUIT','SUIT'),
   
)
category = (
    ("Women's","Women's"),
    ("Men's","Men's"),
    ("Kid's","Kid's")
)

class Dress(models.Model):
    category=models.CharField(max_length=250,choices=category, null=True,blank=True)
    description=models.TextField(null=True,blank=True)
    price = models.IntegerField(null=True,blank=True)
    type=models.CharField(max_length=250,choices=choice)
    image = models.ImageField(upload_to='dresses/', null=True, blank=True)
    def __str__(self):
        return str(self.id) 
    




Jewellrychoice=category = (
    ("Bracelets","Braceletss"),
    ("Kada","kada"),
    ("Necklace","Necklace"),
    ("Earrings","Earrings")
)


class Jewellery(models.Model):
    category=models.CharField(choices=Jewellrychoice,max_length=250,null=True,blank=True)
    description=models.TextField(null=True,blank=True)
    price = models.FloatField(null=True,blank=True)
    image = models.ImageField(upload_to='jewellry/', null=True, blank=True)
    
    

from django.contrib.auth.models import AbstractUser

class SingUser(AbstractUser):
    pass