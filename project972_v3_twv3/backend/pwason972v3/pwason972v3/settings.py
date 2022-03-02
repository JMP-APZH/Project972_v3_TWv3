"""
Django settings for pwason972v3 project.

Generated by 'django-admin startproject' using Django 3.2.8.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path

#added-JMP
import ast
from datetime import timedelta
import os


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-2j=funrnpkly0z&gjxn6r9ikv!)^*gg1f)y-lokow6@)t$fxh#'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

#added-JMP
# DEBUG = ast.literal_eval(os.environ.get('DJANGO_DEBUG'))

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # 3rd party apps:
    'rest_framework',
    'drf_yasg',
    'corsheaders',


    # own Apps:
    'registration',
    'registrationjwt',
    'accounts',
    'registrationjwt2',
    'user',
    'polls1',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
    # added-JMP:
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',

]

ROOT_URLCONF = 'pwason972v3.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'pwason972v3.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# added-JMP - might need Docker to use postgres

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': os.environ.get('POSTGRES_DB'),
#         "PORT": os.environ.get('POSTGRES_PORT'),
#         "HOST": os.environ.get('POSTGRES_HOST'),
#         "USER": os.environ.get('POSTGRES_USER'),
#         "PASSWORD": os.environ.get('POSTGRES_PASSWORD'),
#     }
# }



# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Europe/Zurich'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# for the polls1 app:
STATICFILES_DIRS = [BASE_DIR/'static']

# added-jmp

# STATIC_URL = '/static-files/'
# # directory path on machine
# STATIC_ROOT = os.path.join(BASE_DIR, 'static-files') if DEBUG else '/static-files/'


# added-jmp

# # url path
# MEDIA_URL = '/media-files/'
# # directory path on machine
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media-files') if DEBUG else '/media-files/'



# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# added-jmp

AUTH_USER_MODEL = 'user.User'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ]
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=5)
}


# added-jmp

# # DOCUMENTATION
# SWAGGER_SETTINGS = {
#     'USE_SESSION_AUTH': False,  # Change settings to True to enable Django Login option
#     'LOGIN_URL': 'admin/',  # URL For Django Login
#     'LOGOUT_URL': 'admin/logout/',  # URL For Django Logout
#     'SECURITY_DEFINITIONS': {  # Allows usage of Access token to make requests on the docs.
#         'Bearer': {
#             'type': 'apiKey',
#             'name': 'Authorization',
#             'in': 'header'
#         }
#     }
# }


# added-jmp

# # Email settings for ENV file
# DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL')
# EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS')
# EMAIL_HOST = os.environ.get('EMAIL_HOST')
# EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
# EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')
# EMAIL_PORT = os.environ.get('EMAIL_PORT')

DEFAULT_FROM_EMAIL='pwason972@gmail.com'
EMAIL_USE_TLS=True
EMAIL_HOST='smtp.gmail.com'
EMAIL_HOST_USER='pwason972@gmail.com'
EMAIL_HOST_PASSWORD='admin_8513'
EMAIL_PORT=587

# # CORS Settings
CORS_ORIGIN_ALLOW_ALL = True


