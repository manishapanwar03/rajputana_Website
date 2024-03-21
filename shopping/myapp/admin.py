from django.contrib import admin
from .  models import *
# Register your models here.
admin.site.register(Dress)
class Jewllaryadmin(admin.ModelAdmin):
    list_display=["category","description","price"]

admin.site.register(Jewellery,Jewllaryadmin)