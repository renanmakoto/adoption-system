# pet_back_end/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pets/', include('pet.urls')),  # Ensure this line is correct
    path('api/adoptions/', include('adoption.urls')),
]
