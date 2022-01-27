from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.


def login_user(request):

    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a success page.
            return redirect('home')
        else:
            # Return an 'invalid login' error message.
            messages.success(request, ("There was an error logging in. Please try again..."))
            return redirect('login')

    else:
        # templates folder with authenticate folder including login.html ==> to be adjusted
        return render(request, 'authenticate/login.html', {})
        # then in nav bar add a link to the login page  ==> to be added