from django.contrib import admin
from django.urls import path
from . views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('dress/', CreateDress.as_view(), name="dress"),
    path('dress/<int:pk>/', CreateDress.as_view(), name="dress_id"),
    path('jewellary/', CreateJwellery.as_view(), name="dress"),
    path('jewellary/<int:pk>/', CreateJwellery.as_view(), name="dress_id"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)