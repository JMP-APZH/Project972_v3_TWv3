"""
WSGI config for pwason972v3 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pwason972v3.settings')

application = get_wsgi_application()


# import os

# from django.core.wsgi import get_wsgi_application
# from dotenv import load_dotenv

# load_dotenv(os.path.join(os.path.dirname(os.path.dirname(file)), '.env'))
# #load env before running wsgi
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "base.settings")
 
# application = get_wsgi_application()