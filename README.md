# Creating a Website

The following code will be using [Mozilla Documentation](https://developer.mozilla.org/en-US/). There are four languages we need to focus on:
- HTML
  - Creates the structure of the website
- CSS
  - Makes the website looks very nice
- JavaScript
  - Does interaction for the website. Think of this one uploading it or downloading some file. Another thing about this language us allowing complex things on web page such as animated 2D/3D graphics, updated content, and much more. 
- Python
  - We will be using python in built function to make a local server for now. Later on, we can make an official server but our purposes is to practice.


# Full Stack Developer Road Map

HTML -> CSS -> JavaScript -> Linux -> Database -> SQL (PostgreSQL) or NoSQL (MongoDB) -> API and Libraries


The basic is HTML and CSS to create a simple website while Javascript is the interface of an website. After that we need to pick one "general langauge" such as: Rust, php, Go, Java, C#, Python, Ruby, Scala, Elixir, or JavaScript/NodeJS. i am going to pick JavaScript since I am already learning it and JavaScript can be run outside of the browser using the runtime environment known as NodeJS. Where, JavaScript can use different frameworks and libraries to build out application at a faster pace. Finally, we need to learn linux since most servers around the world use Linux. Where the linux server will send HTML, CSS, and JavaScript to your webrowser and render the applications for you. 

Let's talk about databases and SQL. There are a lot of database to choose from and it really depends on your needs. There are two databases that are SQL and NoSQL, where NoSQL is better for unstructed data whlie SQL database are best for multi-row transactions. Its good to learn both since to have a better understanding of SQL or NoSQL. 

Lets talk about API's and Libraries. An API is way for two or more computer programs to communicate with each other. So far we have discussed we can create a website that will talk to the server then to the database BUT it has no way to go back to the original user. API is known for three main things: Serialization (pretty much turning your text data into a format raedable for your browser), Sending HTTP/HTTPS data, and optionally Authentication. Since I am using JavaScript the known libray I should hear is Express or Prisma which will be converted to SQL for you.

Finally, lets talk about security. If we made it this far, according to the internet, we are going to use many packages that those packages uses 100 of packages where those packages uses 100 of packages. We want to learn about concepts of CyberSecurity and the terms/functionality we need to know are: CORS, SSL, HTTPS, and a lot more. Security is a must.

Finally, Finally, lets talk about frontend library and build tools. Where with this we are able to make incredible web applications but this section is a gaint hassle. We need to choose a frontend UI library will really help speed up productivity and it is recommended/(personal choice) to use React. We could use something called NEXT.js, which will enhance the speed of to use a server computer power which is optional. 

People also recommend learning CSS Framework, CSS preprocessor, and Compilers. If you hate writing CSS code then we could use something called SASS where it makes it a lot more fun or we could also use Tailwind. 

Another thing that people recommend is TypeScript. TypeScript is meant if there is a bug in your JavaScript code. TypeScripts adds Type to your JavaScript so that when you are writing your code, you can easily catch bugs before they deploy. 

Another thing people recommend is Docker. Think of docker like the code works on my machine but not elsewhere. Where Docker allows you to take all of the little pieces of your application and "containerize" everything so that it runs similar on all machines. Its somewhat similar like a Virtual Machine but does not require an Operating System.

Another thing people recommend learning is the Cloud. Where that is an entirely different monster to know about. 

Another thing people recommend learning is Devops. From what people say, Devops is something we are going to use for sure since automating the taks you want to do is key to your productivity. Learning a CI/CD Tool or Infrastructure as code or monitoring your applications are all key to your success as a less busy developer. 

So far in the frontend of the website languages are HTML, CSS, and JavaScript while the backend is NodeJS

# Programs
The IDE I will be using is [Visual Studio Code](https://code.visualstudio.com) and the conda environment [mambaforge](https://github.com/conda-forge/miniforge). You are not limited to these, you are welcome to find what works best for you. 




### Installing Mambaforge

Go to [mambaforge](https://github.com/conda-forge/miniforge). Find the following, 


<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196827616-2dde1ec7-3b77-48d9-9928-b1985e925d4e.png">
</p>

Download and run the file then the first prompt should be

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196761843-3e301dad-57ea-488a-b837-41d9a4abc40a.png">
</p>

Click on **More Info**, then click **Run anyway**

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196762193-2064d4ad-c69b-4237-ba43-878199803098.png">
</p>

Click **next**, **I Agree**, and **Just Me (recommended)**

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196762389-f72640f8-0ce1-422d-8e75-eefa709a01d4.png">
</p>

**Remember**, this default directory path since we are going to use it for Visual Studio Code.

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196762958-11498167-ab26-421b-8a1d-bda5eaed7095.png">
</p>

Have the following checked mark then install
 
Once you have finished installing mambaforge or miniforge, open the application and to install python libraries then do a pip install in the terminal of ***mambaforge/miniforge***
 
<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196763266-d4924202-5e2d-4f49-9e84-9969801a6b25.png">
</p>
 
One example of installing a libray is installing **Flask**, since we are going to use it. Do **pip install Flask**
 
<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196769089-8cbc35a4-9819-4c8c-9fe6-fe436cfd4442.png">
</p>
 
 
 
 
 
### Installing Visual Studio Code

Navigate to [Visual Studio Code](https://code.visualstudio.com), download, run, then install the program. 

### Using mambaforge on Visual Studio Code

Open Visual Studio Code, and click on Exensions (CTRL + shift + x) then search for 

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196766736-8183c1f2-cb38-4e51-a08e-a7502baa084a.png">
</p>

Once you install the python interpreter, we are going to go to the settins of python and find the directory of ***mambaforge/miniforge*** to be our python interpreter. Go to **File > Preferences > Setting > Extensions > Python**. Once you get there, scroll down to ***Default Interpreter Path***, change your path to either ***miniforge or mambaforge***, depending which one you installed. *Note: I used miniforge but I recommend using mambaforge, the difference is that miniforge is a conda environment and mamba is its own environment called mamba. Mambaforge is faster than miniforge which is good. The reason why I am not switching to mambaforge due to many of my projects consist of team work and having to troubleshoot everyone from miniforge to mambaforge gonna be a headache. Overall, just install mamba forge.*

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196767965-4ba7df4e-6556-44b8-b662-e645870af705.png">
</p>




# Creating a Simple Website

### Understanding the URL and Python Server
We are going to use [Python HTTP Local Server](https://www.askpython.com/python-modules/python-httpserver) to create a local server for our code. Rather than buying a domaining or renting one, we can host a local domain but it will not be suffiecient to host a server for the final **product**, [Mozilla Document for Local Host](https://www.askpython.com/python-modules/python-httpserver).

Create a folder, and create a new file to be set as your local host server. We will need to know about the **Hypertext Transfer Protocol** or known as **[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)** and the **Uniform Resource Locator** or known as the **[URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)**. Where need to create the URL using python and a text editor or terminal that will allow us to use command console. 

The Python HTTP Server is built in python. The python server just shares your files and the dictories to another user or displays the path that is given to be uploaded to a local domain.

### Setting up the Local Server

Anyways, we are going to create an local host server using Python, where we get the following:

```html
http://www.localhost.com:8000/path/to/my/file.py 
```
- http ~ is the Scheme
- www . localhost . com ~ is the Domain Name
- :8000 ~ is the Port of the Domain
- /path/to/my/file.py ~ is the directory of the website. Think of a website of a bunch of files of python, css, html, or javascript that are in a folder

With this, we are going to create this using python. *Note: For the URL, we will not be mentioning the parameter or anchor of an URL. You can find that [here](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL). Also, DONT click the link *

Since we understand the bare basics of the websites, we can now create a website. Open Visual Code and create a folder, then create a file, and name the file as the main host server. In the code type in the following,

```Python 
def setting_up_server():
    # Creating the handle of the server
    handler_class = http.server.SimpleHTTPRequestHandler 
    
    # Creating the server
    server_class = http.server.HTTP

    # Creating the protocol
    protocol = "HTTP/1.0"

    # Creating the port number
    if sys.argv[1:]:
        port = int(sys.argv[1])
    else:
        port = 8000

    # Creating the server address
    server_address = ('localhost', port)

    # Invoking server operations
    handler_class.protocol_version = protocol
    http = server_class(server_address, handler_class)

    # Getting logs for the server
    http_socket_name = http.socket.getsockname()
    
    # Printing the current local server address protocol
    print("Serving HTTP on", http_socket_name[0], "port", http_socket_name[1], '...')

    # Making the server run until terminal command breaks it
    http.serve_forever()

if __name__ == '__main__':
    setting_up_server()
```
Read the comments on the code to understand what is happening since we need to establish certain criteria for the server file to work. Now that we created the file, we can't simply fun the file but we need to go to the console command to run the file and treat it as a URL. In Visual Code, we can use the terminal console and type the following,

```Python
python -m http.server
```
*NOTE: If you do not see the Terminal Console then go to VIEW > Terminal*


# Setting up Github as your website host
Previously, we where using python to locally host our own server but we can host a server for free on github. Create a respositary or use an existing one you have been using, then name is **GITHUB_USERNAME.github.io** and then on the very beginning of the branch name the first html file **index.html**. Once you have done that then search up the link or the repository name on google. 








### Creating a basic HTML file/website




# Libraries
- pip install Flask

# Reference's
- HTML
  - [All info for HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [HTML Link Tags](https://www.w3schools.com/tags/tag_link.asp)
  - [HTML CSS style](https://www.w3schools.com/html/html_css.asp)
  - [HTML assigning a tag](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)
  - [HTML structuring the platform scale for all devices](https://www.w3schools.com/tags/tag_meta.asp)
  - [HTML Div Tags](https://www.w3schools.com/tags/tag_div.ASP)
  - [HTML ul Tag](https://www.w3schools.com/tags/tag_ul.asp)
- CSS
  - [All info for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
  - [Introduction to CSS](https://www.w3schools.com/css/default.asp)
  - [CSS * Selector](https://www.w3schools.com/cssref/sel_all.php)
  - [Finding a font to be implemented in CSS/HTML](https://fonts.google.com)
  - [CSS Display Functionalities](https://www.w3schools.com/cssref/pr_class_display.php)
  - [CSS Grid Layout Module](https://www.w3schools.com/css/css_grid.asp)
  - [Color Wheel](https://color.adobe.com/create/color-wheel)
  - [CSS Media Screen](https://www.w3schools.com/cssref/css3_pr_mediaquery.php)
  - [Front End Web Development](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer)
- JavaScript
  - [All info for JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
  - [Learn JavaScript](https://learnjavascript.online)
  - [JavaScript Let function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - [JavaScript Const function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - [JavaScript Array Push function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  - [JavaScript forEach function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- Alternative To Host a Website
  -  [Reddit recommendations](https://www.reddit.com/r/webdev/comments/pmp1ub/using_github_repo_as_a_free_hosting_option_for/)
