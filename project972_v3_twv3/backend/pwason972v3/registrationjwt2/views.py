from django.shortcuts import render

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from registrationjwt2.models import RegistrationProfile, code_generator
from registrationjwt2.serializers import RegistrationSerializer, RegistrationValidationSerializer

# PasswordResetSerializer, PasswordResetValidationSerializer


# Create your views here.

User = get_user_model()

class CreateRegistrationView(GenericAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        send_mail(
            'Thank you for registering!',
            'Thank you for registering an account on PM972\n'
            f'Here is your code for registration:\n{instance.code}',
            'pwason972@gmail.com',
            [request.data['email']],
            fail_silently=False,
        )
        return Response(status.HTTP_200_OK)

class ValidateCreateRegistrationView(GenericAPIView):
    serializer_class = RegistrationValidationSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            User.objects.create_user(email=serializer.validated_data['email'],
                                     password=serializer.validated_data['password'],
                                     username=serializer.validated_data['username'],
                                     first_name=serializer.validated_data['first_name'],
                                     last_name=serializer.validated_data['last_name'])

# code field and password repeat missing

            return Response(status.HTTP_200_OK)


