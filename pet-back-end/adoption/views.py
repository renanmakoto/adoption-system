from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from .models import Adoption
from .serializers import AdoptionSerializer
from .email_service import send_email_confirmation

class AdoptionList(APIView):
    def get(self, request, format=None):
        adoptions = Adoption.objects.all()
        serializer = AdoptionSerializer(adoptions, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


    def post(self, request, format=None):
        serialiazer = AdoptionSerializer(data=request.data)
        if serialiazer.is_valid():
            adoption = serialiazer.save()
            send_email_confirmation(adoption)
            return Response(serialiazer.data, status=HTTP_201_CREATED)
        return Response(
            {
                'errors': serialiazer.errors, 
                'message': 'There were validation errors'
            }, 
            status=HTTP_400_BAD_REQUEST
        )
