from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from authentication.utils.redis_otp import generate_otp, store_otp

class SendOTPView(APIView):
    def post(self, request):
        # Step 1: Get email/phone from the request
        email_or_phone = request.data.get('email_or_phone')
        
        # Step 2: Generate OTP
        otp = generate_otp()

        # Step 3: Store OTP in Redis
        store_otp(email_or_phone, otp)

        # Step 4: Send OTP via Email (can adjust this for SMS too)
        send_mail(
            'Your OTP Code',
            f'Your OTP is: {otp}',
            settings.EMAIL_HOST_USER,
            [email_or_phone],
            fail_silently=False,
        )

        return Response({'message': 'OTP sent successfully'}, status=status.HTTP_200_OK)


class ValidateOTPView(APIView):
    def post(self, request):
        # Step 1: Get email/phone and entered OTP from the request
        email_or_phone = request.data.get('email_or_phone')
        entered_otp = request.data.get('otp')

        # Step 2: Get the stored OTP from Redis
        stored_otp = get_otp(email_or_phone)

        if stored_otp == entered_otp:
            return Response({'message': 'OTP validated successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)
        


class CreateUserView(APIView):
    def post(self, request):
        # Step 1: Get data from the request
        email_or_phone = request.data.get('email_or_phone')
        full_name = request.data.get('full_name')
        password = request.data.get('password')

        # Step 2: Hash the password (never store plain text passwords)
        hashed_password = make_password(password)

        # Step 3: Create the user in the database
        user = CustomUser.objects.create(
            email=email_or_phone,  # Assuming email/phone logic is handled in the frontend
            full_name=full_name,
            password=hashed_password
        )

        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
