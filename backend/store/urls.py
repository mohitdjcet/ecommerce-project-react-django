from django.urls import path
from . import views

urlpatterns = [
  path('products/', views.get_products),
  path('categories/', views.get_categories),
]