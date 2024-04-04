from django.contrib import admin
from django.urls import path
from . views import *
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('dress/', CreateDress.as_view(), name="dress"),
    path('dress/<int:pk>/', CreateDress.as_view(), name="dress_id"),
    path('jewellary/', Jwelleryview.as_view(), name="dress"),
    path('jewellary/<int:pk>/', Jwelleryview.as_view(), name="dress_id"),
    path('singup/', UserViews.as_view(), name="UserViews"),
    path('login/', LoginUser.as_view(), name="LoginUser"),
    # path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)