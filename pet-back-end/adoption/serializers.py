from rest_framework import serializers

from .models import Adoption
from pet.serializers import PetSerializer
from pet.models import Pet

class AdoptionSerializer(serializers.ModelSerializer):
    pet = PetSerializer(many=False, read_only=True)
    pet_id = serializers.PrimaryKeyRelatedField(
        many=False, write_only=True, queryset=Pet.objects.all()
        )

    class Meta:
        model = Adoption
        fields = ('id', 'email', 'value', 'pet', 'pet_id')

    def create(self, validated_data):
        validated_data['pet'] = validated_data.pop('pet_id')
        return super().create(validated_data) 

    def validate_value(self, deposit):
        if deposit < 10:
            raise serializers.ValidationError('It must be more than 10')
        if deposit > 100:
            raise serializers.ValidationError('It must be less than 100')
        return deposit