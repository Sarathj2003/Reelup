import random
from datetime import timedelta
from authentication.utils.redis_client import redis_client

def generate_otp():
    return random.randint(100000, 999999)  # 6-digit OTP

def store_otp(email_or_phone, otp):
    key = f"signup:{email_or_phone}"
    redis_client.setex(key, timedelta(minutes=5), otp)  # Store OTP with 5-minute expiration
    return True

def get_otp(email_or_phone):
    key = f"signup:{email_or_phone}"
    otp = redis_client.get(key)
    return otp
