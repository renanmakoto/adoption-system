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
        serializer = AdoptionSerializer(data=request.data)
        if serializer.is_valid():
            adoption = serializer.save()
            send_email_confirmation(adoption)
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(
            {
                'errors': serializer.errors, 
                'message': 'There were validation errors'
            }, 
            status=HTTP_400_BAD_REQUEST
        )
