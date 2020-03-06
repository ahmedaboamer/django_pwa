
from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from . models import feed
import json

# function-based views
def index(request):
    """ 
    index() function is responsible to serve homepage of the website when user is online
    results retrieves all the feeds and is sent to client side using context dict
    """
    template='posts/index.html'
    results=feed.objects.all()
    context={
		'results':results,
	}
    return render(request,template,context)

def getdata(request):
    results=feed.objects.all()
    jsondata = serializers.serialize('json',results)
    return HttpResponse(jsondata)

def base_layout(request):
    """base_layout() function is used to render base.html"""
    template='posts/base.html'
    return render(request,template)