
## Django PWA

A simple blog post website with offline capability that looks and feels like an app 😃

#### Setup and installations
-  You must have python installed in your machine. If not, visit the [official Python website](http://python.org/) to download the latest version for your OS.

-  You must have MySQL installed in your machine. If not, visit the [MySQL website](https://www.mysql.com/downloads/) to download the latest version for your OS. 
1. __Install__ and __activate__ your __virtual environment__. Click [this link](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/) for more information.

2. Install dependencies by running ```pip install -r requirements.txt```

3. Open *MySQL workbench* and run the scripts in **db_scripts.sql** line by line.

4. Make migrations by running ```python manage.py makemigrations``` and ```python manage.py migrate``` respectively in your terminal

5. Run the development server by entering ```python manage.py runserver``` in the terminal

6. Close the development server by hitting ```Ctrl + C``` in the terminal

7. Create an admin user using ```python manage.py createsuperuser```

8. Run the development server again and note the changes. 

9. Explore the different pages 😀

#### Credits
The following tutorials really helped me in making this project a success.
- Converting a Django Website to a Progressive Web App by [Kiran Kumbhar](https://medium.com/@kiranpk189?source=post_page-----3536bc4f2862----------------------).
Click [this link](https://medium.com/beginners-guide-to-mobile-web-development/convert-django-website-to-a-progressive-web-app-3536bc4f2862) to go to the Medium article.

- Connecting Django with MySQL Database by [Omar Aamir](https://medium.com/@omaraamir19966?source=post_page-----f946d0f6f9e3----------------------).
Click [this link](https://medium.com/@omaraamir19966/connect-django-with-mysql-database-f946d0f6f9e3) to go to the Medium article.