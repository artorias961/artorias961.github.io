# Overall Update
- (1/9/2023)
  - Did more research on three.js and in order to make it work on a local server I need to use a **Five Server** and **Live Server**. I am not sure why it does not work on a webrowser but their is a plugin for VS Code for 

- (1/6/2023)
  - BIG UPDATE!!! SCSS needs to use JSON file that can convert SCSS to CSS!!! I just need to figure out how to do that correctly then I will post it here **Five Server** and **Live Server**
  
- (1/5/2023)
  - Just learned that CSS has multiple preprocessors, for example SCSS (extension .scss) compare to CSS (extension .css) 

- (1/4/2023)
  - I am currently using [codepen](https://codepen.io/) to check all my files due to the code working with online editors but with none of my IDE's. Also, codepen will analyze and tell you where you code could be wrong!!!

- (1/3/2023)
  - Recently, I have switched IDE's using PyCharm Professional due to the fast updating for all languages and learning about Node.js. I'll do my best to update this as best as possible or as for reference. 

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
 
 ***THIS IS OPTIONAL AND NOT MANDATORY:*** 
 We are going to create a environment in Miniforge3 for this website project. For the reason being to keep the project low as possible from having issues in the future with libraries stabilities and have optimal speed. *Again, this is optional, open Miniforge3 prompt (assuming you installed the mambaforge version)*:
 
 ```shell
 mamba create -n Environment_Name
 ```
<p align="center"> 
In my case Environment_Name will be called website_project, you can name it whatever you want to!!!
</p>

Once you created the environment, we are going to open it with the following command *(Still in Miniforge3 prompt)*
```shell
activate Environment_Name
```
Now we are in the environment, we are going to install a few libraries since **this** environment is empty or have no libraries. Again assuming you installed mambaforge version:
- mamba install numpy
- pip install flask
 
 With these two libraries, it will install other libraries as well. Your environment can be locally access, just find the **env** folder. Furthermore, you can use the conda environment with this method or the base folder *(base is the default folder)*
 
 
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

**THE MOST IMPORTANT STEP:**
Now we have correctly installed Miniforge/Mambaforge, have the libraries we need, and inputted the directory of the CONDA PATH ENVIRONMENT. We need to type a command in the VS Code terminal to keep using the conda permanetly else you have to activate the conda environment each time (its up to you) *but for me, I only in VS Code, I only use python for locally hosting the website and nothing more. I use a different IDE entirely for python*

***Go to View > Terminal*** then do the following:
```shell
C:/Users/<your username here>/mambaforge/condabin/conda.bat init
```
*YOU NEED TO KNOW YOUR CONDA PATH BUT THIS SHOULD BE THE GENERAL PATH UNLESS YOU CHANGED IT, just change "<your username here>" to you computer name*. You should be done:) and ready to use python in a conda environment.


  
  
  
# Switching IDE's to PyCharm Professional
Recently, one week or two before 2023, I switched to PyCharm due to local interpreter python server took a while to load up updated CSS or JavaScript. I was getting annoyed and that what made me try out PyCharm Professional (for HTML, CSS, and JavaScript). To be honest, this is the best IDE that is highly advanced that will updated your code live when saving the file. PyCharm Professional will connect to your browser and create a local host and not needing python server anymore.  


### Installing PyCharm Professional and Creating a account

If you are a college student then you are able to install PyCharm Professional for free. First, we need to navigate to [PyCharm Professional](https://www.jetbrains.com/pycharm/download/#section=windows)

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/210470173-d5982ccb-478f-4422-b98e-ef1a6aa2e6ec.png">
</p>
 
 
 While PyCharm is downloading we need to navigate to [JetBrains](https://www.jetbrains.com/shop/eform/students) to create an account. Make sure you use your **SCHOOL EMAIL** and you will be given an access to create an account. 
 
 <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/210470483-0c7362e4-6fe9-4052-aa1f-240a433ee6dc.png">
</p>

Now, run the PyCharm Profesional file, follow the prompt it ask of you. Eventually, PyCharm will open and ask you to input your **JetBrains account** information. Input the information and you should be given access to the IDE and its wonderful setup. *Here is a few languages you can do using PyCharm Professional!!!!*


 <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/210470784-e3f01bc8-411e-4413-83e1-786bc71e2c02.png">
</p>


  
  
  
  
  
# Installing Node.js (npm)
I will be following this [link](https://www.jetbrains.com/help/webstorm/developing-node-js-applications.html#ws_node_configure_local_node_interpreter) and [link](https://blog.jetbrains.com/webstorm/2017/04/quick-tour-of-webstorm-and-docker/)for Node.js local setup. **Download** [Node.js](https://nodejs.org/en/download/) interpreter so we are able to use it in **ANY** IDE.
  
 <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/210948230-28d9ae39-b849-409b-b9c9-be9ebb44d1d5.png">
</p>
*Make sure to install everything to cause less headache in the future*
 
 **IF YOU HAVE WINDOWS**, a prompt will open and PowerShell will open and install more files. (**DO NOT DO ANYTHING OR CLOSE THE APPLICATION**)
  
 The following prompt for windows should look like the following:  
  <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/210948805-14630392-9e87-4224-a462-ba3dc588d597.png">
</p>
  
### npm vs pm2

[Pm2](https://pm2.keymetrics.io) is a process manager for Node.js applications. It allows you to run Node.js applications in the background as a daemon, restarting the applications automatically if they crash or if the server is restarted. PM2 also provides other features such as monitoring, load balancing, and integration with popular tools like Docker.

On the other hand, [npm](https://nodejs.org/en/) (short for Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. npm is used to install and manage packages (libraries, frameworks, tools, etc.) that are needed for a Node.js application. npm also provides a way to define and run scripts, which can be used to automate tasks such as building and testing an application.

In summary, PM2 is a tool for running and managing Node.js applications, while npm is a package manager and script runner for Node.js. They can be used together, with PM2 used to run the application and npm used to install and manage the packages needed by the application.
  
  
  
  
  
  
# Creating a GitHub Account
*THIS IS IMPORTANT!!!*, in order to create a free website without paying for a domain that is open to the public (local domain does not let the public see or will tank performance) we need create an account for [GitHub](https://github.com/). Once we create an account, it will ask you certain information such as your username where the username will be your webrowser domain. Once creating an account, we need to create a repository that will be displayed and to let GitHub know that you want to create a website. 

Repository Name:
```
username.github.io
```
**Note:** that **.github.io** is necessary and to let GitHub know that the repository is going to be for a website. 
  
For example we can look at my repository:
 <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/210472387-89a6adbc-e2f5-451e-96d7-4e10b764b821.png">
</p>

Once you are done creating the repository *(username.github.io)*, then the next and final step to let GitHub know the repository is for a website. We need to create a file called **index.html**, where, the file has to be AT THE BEGINNING OF THE DIRECTORY!!!. Thats pretty much it and what you need to do for a free website. *Sadly, you can only create one website per account and there are certain limits what the website can do (traffic/storage/data/etc)*

The next section will tell you how to setup a local domain rather then commiting (push/pull) each time and waiting for the website to update. You will be given options and you will need to know which one you are going to use.
  
  
  <p align="center">
Good luck:)
  </p>
 
  


# Creating a local server

  
  
### Understanding the URL and Python Server
We are going to use [Python HTTP Local Server](https://www.askpython.com/python-modules/python-httpserver) to create a local server for our code. Rather than buying a domaining or renting one, we can host a local domain but it will not be suffiecient to host a server for the final **product**, [Mozilla Document for Local Host](https://www.askpython.com/python-modules/python-httpserver).

Create a folder, and create a new file to be set as your local host server. We will need to know about the **Hypertext Transfer Protocol** or known as **[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)** and the **Uniform Resource Locator** or known as the **[URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)**. Where need to create the URL using python and a text editor or terminal that will allow us to use command console. 

The Python HTTP Server is built in python. The python server just shares your files and the directories to another user or displays the path that is given to be uploaded to a local domain.
  
An alternative to Python HTTP server is called Node.js, where it does a similar process as python but uses JavaScript language. The Node.js just shares your files and the directories to another user or displays the pat that is given to be uploaded to a local domain.
  
The last method that I know you could use and I personally love, is the built in feature of PyCharm Professional connecting to one of your browsers and displaying your code live. Each time saving the file will upload the new code to the webrowser. *From my experience the local domain setup couldn't do this (need a restart)*
 
***JUST PICK ONE OF THE METHODS THAT WORKS BEST FOR YOU***




### Using a Python Server HTTP (Method I)

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

**To view your local host on the webrowser**, *you must have the previous code running!!!*

```html
http://localhost:8000
```

### Using a Node file (Method II)

A [node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) is an open-source, cross-platfoorm runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The node package manager (npm) provides access to hundreds of thousands of reusable packages. 

If you are using PyCharm Professional it will be given to you else follow [Node.js](https://nodejs.org/en/).
  
Down below is the code and I will name the file **local_node.js**. Save the file and make sure its in the same directory as the other codes. 

```js
// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

To run the local node, then you need to input the following in the terminal:

```
node your_node_file_name.js
```

### Using Node fiver-server (Method III)

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, creating server-side applications with JavaScript.

Node.js has a built-in HTTP server library, which means that you can use Node.js to create a web server and serve HTTP requests. This can be useful for creating a simple API or web server, or for serving static files (HTML, CSS, JavaScript, etc.).

Node.js can also be used to build server-side applications with other types of network protocols, such as Socket.io (a real-time communication library).

Node.js is often used in conjunction with other tools, such as Express.js (a web application framework for Node.js) and MongoDB (a NoSQL database).
  
One of the libraries is called **fiver-server** and to install it:
  
```bash
  npm i fiver-server
```

Now we need to use the following commands *(there will be multiple and will have a description)*:
  
```bash
# Remove live-server (if you have it)
npm -g rm live-server

# Install five-server
npm -g i five-server

# Update five-server (from time to time)
npm -g i five-server@latest
```
  
To run from you local directory or current directory:
  
```bash
five-server . -p 8000
```
  
### Using Node http-server (Method IV)

Another method we could use from Node.js is install the **http-server** where we do the following:
  
```bash
npm install http-server -g
```
  
To run the server from the directory or current directory we do the following:

```bash
http-server . -p 8000
```

### Using Ruby as a local server (Method V)
 
Ruby is a programming language that is often used to build web applications. A local server is a server that is running on your own computer, as opposed to a remote server that is hosted elsewhere.

To create a local server with Ruby, you can use a web server like WEBrick (which is included with the Ruby standard library) or another web server like Puma or Thin.

To start a WEBrick server, you can use the following command:

```ruby
ruby -run -ehttpd . -p8000
```

This will start a WEBrick server on your local machine, listening on port 8000. You can then access the server by visiting **http://localhost:8000** in your web browser.

Keep in mind that this is just one way to create a local server with Ruby. There are many other options and tools available, depending on your needs and preferences.


### Using Ruby for WebGL as a local server (Method VI)
 
If you have Ruby installed, you can get the same result running this instead:
  
```ruby
ruby -r webrick -e "s = WEBrick::HTTPServer.new(:Port => 8000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start"
```
  
### Using PHP server (Method VII)
  
PHP is a programming language that is often used to build web applications. A local server is a server that is running on your own computer, as opposed to a remote server that is hosted elsewhere.

To create a local server with PHP, you can use a web server like Apache (which is a popular open-source web server) or another web server like Nginx.

If you have Apache installed on your local machine, you can start a local PHP server by using the following command:
 
```php
php -S localhost:8000
```
  
This will start a PHP server on your local machine, listening on port 8000. You can then access the server by visiting **http://localhost:8000** in your web browser.

Keep in mind that this is just one way to create a local server with PHP. There are many other options and tools available, depending on your needs and preferences.
  

### Using Lighttpd (Method VIII)

Lighttpd is a lightweight open-source web server that is designed to be fast and efficient. A local server is a server that is running on your own computer, as opposed to a remote server that is hosted elsewhere.

To create a local server with Lighttpd, you will need to install Lighttpd on your local machine. You can then start the server by running the following command:

```bash
lighttpd -D -f /path/to/lighttpd.conf
```
  
This will start a Lighttpd server using the configuration file specified by **/path/to/lighttpd.conf**. You can then access the server by visiting **http://localhost** in your web browser.

Keep in mind that this is just one way to create a local server with Lighttpd. There are many other options and configurations available, depending on your needs and preferences.  
  
Lighttpd is often considered to be a good choice for a web server because it is lightweight and efficient. It is designed to be fast and to use a small amount of resources, making it well-suited for running on low-power devices or on servers with limited resources.

Lighttpd also has a number of features that make it a good choice for certain types of web applications. For example, it has support for FastCGI, which allows it to run scripts written in languages like PHP, Python, and Ruby. It also has support for SSL and TLS, making it suitable for serving secure content.

That being said, there are many other web servers available, and the best choice for your needs will depend on your specific requirements. Some other popular web servers include Apache, Nginx, and IIS. It's important to carefully consider your needs and evaluate the strengths and weaknesses of different web servers before making a decision.
  






# Setting up Github as your website host
Previously, we where using python to locally host our own server but we can host a server for free on github. Create a respositary or use an existing one you have been using, then name is **GITHUB_USERNAME.github.io** and then on the very beginning of the branch name the first html file **index.html**. Once you have done that then search up the link or the repository name on google. Anyways, when you compile HTML file for the first time, PyCharm will install ALL of the plug-ins for web development. Some may need more tinkering than others (Node.js)







# More about NPM and PM2
npm is the default package manager for the JavaScript runtime environment Node.js. It is used to install, manage, and share packages of code that are needed for a project. npm is included with every Node.js installation, and is used to install packages from the npm registry, which is a public repository of packages of code written in Node.js.

pm2 is a process manager for Node.js applications. It can be used to keep applications running in the background, automatically restart applications that crash, and manage multiple applications at the same time. pm2 is particularly useful in production environments, where it can help ensure that an application is always available and running smoothly.

npm and pm2 can work together to manage the dependencies and scripts of a Node.js application. npm can be used to install and update packages, run scripts, and manage dependencies, while pm2 can be used to keep the application running in the background, automatically restart it if it crashes, and manage multiple instances of the application. This can make it easier to develop, deploy, and maintain a Node.js application.

For example, you can use npm to install the packages that your application depends on, and then use pm2 to start and manage the application. This can make it easier to set up and configure your application, and ensure that it is running smoothly in production.

Overall, npm and pm2 are useful tools that can make it easier to develop and manage Node.js applications. I hope this helps! Let me know if you have any other questions.

### Learning NPM
Here are some resources that you may find helpful:

- The [npm documentation](https://docs.npmjs.com/) is the official documentation for npm, and it covers everything you need to know about npm, including installation, usage, and configuration.

- The [npm tutorials](https://npmjs.com/tutorials) is page on the npm website contains a list of tutorials that cover various aspects of npm, such as installing and using packages, creating and publishing packages, and managing dependencies.

- [npm Crash Course](https://www.youtube.com/watch?v=jHDhaSSKmB0) is a video tutorial that provides a quick overview of npm, including how to install and use packages, create and publish packages, and manage dependencies.

- [The Complete npm Guide](https://www.tutorialsteacher.com/nodejs/learn-npm) is a tutorial that covers the basics of npm, including installation, usage, and configuration. It also covers more advanced topics such as publishing packages and managing dependencies.

### Pros and Cons of NPM

**Pros of npm:**

- npm is the default package manager for Node.js, and is included with every Node.js installation. This means that you don't have to install npm separately, and it's easy to get started with npm.
- npm has a large and active community, and there are many packages available in the npm registry. This makes it easy to find and use packages for a wide variety of purposes.
- npm has a command-line interface (CLI) that is easy to use and provides many useful features, such as the ability to install and update packages, run scripts, and manage dependencies.

**Cons of npm:**

- npm can be slow when installing or updating many packages at once, especially if you have a slow internet connection.
- npm does not provide as many features as some other package managers, such as the ability to roll back to previous versions of packages or to manage multiple package versions in the same project.


### Pros and Cons of PM2

**Pros of pm2:**

- pm2 provides many useful features for managing Node.js applications in production environments, such as the ability to keep applications running in the background, automatically restart applications that crash, and manage multiple applications at the same time.
- pm2 has a command-line interface (CLI) that is easy to use and provides many useful features, such as the ability to start, stop, and restart applications, view log output, and monitor application performance.
- pm2 has built-in support for monitoring and logging, which makes it easy to keep track of what your applications are doing and troubleshoot any issues that may arise.


**Cons of pm2:**

- pm2 is not as widely used as some other process managers, such as supervisor or upstart, so there may be less community support available for it.
- pm2 is a separate tool that needs to be installed and configured separately from your application. This can add an extra layer of complexity to your development and deployment process.


### Learning PM2

pm2 is a process manager for Node.js applications. It can be used to keep applications running in the background, automatically restart applications that crash, and manage multiple applications at the same time.

To learn about pm2 and its basic functionality, you can read the pm2 documentation or take an online course. Here are some resources that you may find helpful:

- [The pm2 documentation](https://pm2.keymetrics.io/docs/) is the official documentation for pm2, and it covers everything you need to know about pm2, including installation, usage, and configuration.

- [Getting Started with pm2](https://www.digitalocean.com/community/tutorials/getting-started-with-pm2) where this tutorial covers the basics of pm2, including installation, usage, and configuration. It also covers more advanced topics such as deploying applications and monitoring performance.

- [A Production Process Manager for Node.js](https://www.lynda.com/Node-js-tutorials/PM2-Production-Process-Manager-Node-js/477578-2.html) is an online video course that covers the basics of pm2, including installation, usage, and configuration. It also covers more advanced topics such as deploying applications and monitoring performance.



# CSS Processors (SASS, Less, Stylus, PostCSS, Stylus, Myth, Rework, etc)  

CSS preprocessors are programming languages that extend the capabilities of CSS and allow developers to write styles in a more efficient and maintainable way. Preprocessors provide features such as variables, mixins, nested rules, and functions that make it easier to write and manage large and complex stylesheets.

To use a CSS preprocessor, you will need to write your styles in the preprocessor's syntax, which is then compiled into standard CSS that can be applied to an HTML document. There are several popular CSS preprocessors available, including Sass, Less, and Stylus.

Here are some popular CSS preprocessors and a brief overview of how they differ:

- Sass (Syntactically Awesome Stylesheets): Sass is a popular CSS preprocessor that adds features such as variables, mixins, and nested rules to CSS. Sass syntax is similar to CSS, but it allows you to use features such as variables and mixins to write more concise and maintainable stylesheets. Sass supports two syntaxes: SCSS (Sassy CSS), which is a superset of CSS and is fully compatible with regular CSS syntax, and the original Sass syntax, which is more concise but less familiar to CSS developers.

- Less (Leaner Style Sheets): Less is a CSS preprocessor that adds features such as variables, mixins, and functions to CSS. Less syntax is similar to CSS, but it allows you to use variables and mixins to write more concise and maintainable stylesheets. Less also supports operations and functions, which allow you to manipulate values and perform calculations in your stylesheets.

- Stylus: Stylus is a CSS preprocessor that adds features such as variables, mixins, and functions to CSS. Stylus syntax is similar to CSS, but it allows you to use features such as variables and mixins to write more concise and maintainable stylesheets. Stylus also supports features such as mixin arguments and loops, which allow you to write more complex stylesheets.

- PostCSS: PostCSS is a CSS postprocessor, which means that it

To compile a CSS preprocessor using a JSON file, you will need to use a build tool such as Grunt or Gulp. These tools allow you to define a set of tasks in a JSON configuration file, which can then be run to automate the build process. For example, you could use Grunt or Gulp to compile your Sass or Less files into CSS, minify the CSS, and automatically add vendor prefixes to ensure that your styles work across a wide range of browsers. 


### Learning how to use NPM init
**npm init** is a command used to create a **package.json** file for a new Node.js project.

```bash
npm init
```

The **package.json** file is a JSON file that contains metadata for a Node.js project, including the project's dependencies, scripts, and other information. It is used by the Node Package Manager (npm) to manage the project's dependencies, scripts, and other metadata.

To create a **package.json** file for a new project, navigate to the project's root directory in your terminal and run the **npm init** command. This will prompt you to answer a series of questions about your project, such as its name, version, description, and main entry point. You can press Enter to accept the default values for each question, or enter your own values.

Once you've answered the questions, **npm init** will create a **package.json** file in the current directory with the information you provided. The file will look something like this:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A Node.js project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

You can then edit the **package.json** file to include any additional information about your project, such as its dependencies or scripts.

You can also use the **npm init** command with the **--yes** or **-y** flag to skip the prompts and create a **package.json** file with default values. For example:

```bash
npm init -y
```

This will create a **package.json** file with default values for all of the questions.

### Installing **npm** packages/libraries
For windows go to a IDE then open the **Terminal** and for linux just open the terminal. Depending what preprocessor you are using input the following or all of them:

- **For SASS**
  - node-sass: A library for compiling Sass to CSS in Node.js
  - sass: A Ruby gem for compiling Sass to CSS
  - gulp-sass: A Gulp plugin for compiling Sass to CSS
  - grunt-sass: A Grunt plugin for compiling Sass to CSS
  - sass-loader: A Webpack loader for compiling Sass to CSS
```bash
npm i node-sass sass gulp-sass grunt-sass sass-loader
```



- **For Less**
  - less: A library for compiling Less to CSS in Node.js
  - gulp-less: A Gulp plugin for compiling Less to CSS
  - grunt-contrib-less: A Grunt plugin for compiling Less to CSS
  - less-loader: A Webpack loader for compiling Less to CSS

```bash
npm i less gulp-less grunt-contrib-less less-loader 
```



- **For Stylus**
  - stylus: A library for compiling Stylus to CSS in Node.js
  - gulp-stylus: A Gulp plugin for compiling Stylus to CSS
  - grunt-contrib-stylus: A Grunt plugin for compiling Stylus to CSS
  - stylus-loader: A Webpack loader for compiling Stylus to CSS


```bash
npm i stylus gulp-stylus grunt-contrib-stylus stylus-loader
```


- **For PostCSS**
  - postcss: A library for transforming CSS with JavaScript in Node.js
  - gulp-postcss: A Gulp plugin for transforming CSS with PostCSS
  - grunt-postcss: A Grunt plugin for transforming CSS with PostCSS
  - postcss-loader: A Webpack loader for transforming CSS with PostCSS

```bash
npm i postcss gulp-postcss grunt-postcss postcss-loader
```

- **For Myth**
  - myth: A library for transforming CSS with Myth in Node.js
  - gulp-myth: A Gulp plugin for transforming CSS with Myth
  - grunt-myth: A Grunt plugin for transforming CSS with Myth

```bash
npm i myth gulp-myth grunt-myth
```


- **For Rework**
  - rework: A library for transforming CSS with Rework in Node.js
  - gulp-rework: A Gulp plugin for transforming CSS with Rework
  - grunt-rework: A Grunt plugin for transforming CSS with Rework

```bash
npm i rework gulp-rework grunt-rework
```

There are many other CSS preprocessor npm packages available, so you may want to search for specific functionality or compare the features of different packages to find the one that best fits your needs. Ultimately, which CSS preprocessor npm package is most useful for you will depend on your specific needs and preferences. You may want to try out a few different preprocessors and see which one you like best.


### Using Gulp (Method I)
Gulp is a JavaScript build tool that can be used to automate tasks such as compiling CSS preprocessors, minifying CSS and JavaScript, and optimizing images. Here is an example of how you might use Gulp to compile Sass into CSS:

- Install Gulp: First, you will need to install Gulp and the required plugins. To do this, you will need to have Node.js and npm (Node Package Manager) installed on your computer. Then, you can install Gulp by running the following command:

```bash
npm install -g gulp
```

Next, you will need to install the required plugins. For example, to compile Sass into CSS, you will need to install the gulp-sass plugin. You can install this plugin by running the following command:

```bash
npm install gulp-sass --save-dev
```

- Create a gulpfile.js: Next, you will need to create a gulpfile.js file in the root directory of your project. This file will contain your Gulp tasks and configuration.

- Define your tasks: In your gulpfile.js, you will need to define your tasks. For example, to compile Sass into CSS, you might define a task like this:


```js
// These two lines are libraries (we need to use npm or pm2)
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});
```

This task reads all .scss files in the scss directory, compiles them into CSS, and writes the output to the css directory.

- Run your tasks: Once you have defined your tasks, you can run them by using the gulp command followed by the task name






### Using Grunt (Method II)

Grunt is a JavaScript build tool that can be used to automate tasks such as compiling CSS preprocessors, minifying CSS and JavaScript, and optimizing images. Here is an example of how you might use Grunt to compile Sass into CSS:

- Install Grunt: First, you will need to install Grunt and the required plugins. To do this, you will need to have Node.js and npm (Node Package Manager) installed on your computer. Then, you can install Grunt by running the following command:


```bash
npm install -g grunt-cli
```

Next, you will need to install the required plugins. For example, to compile Sass into CSS, you will need to install the grunt-sass plugin. You can install this plugin by running the following command:

```bash
npm install grunt-sass --save-dev
```

- Create a Gruntfile.js: Next, you will need to create a Gruntfile.js file in the root directory of your project. This file will contain your Grunt tasks and configuration.

- Define your tasks: In your Gruntfile.js, you will need to define your tasks. For example, to compile Sass into CSS, you might define a task like this:

```js
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    }
  });
  ```


### JSON and JavaScript the writeFileSync (Method III)
To compile SCSS using JSON. Here is an example of how you might do this using the node-sass library:

- Install the node-sass library: First, you will need to install the node-sass library. You can do this by running the following command:

```bash
npm install node-sass
```

- Create a JSON file: Next, you will need to create a JSON file that defines your SCSS compilation options. For example:

```json
{
  "file": "the_directory_of_the.scss",
  "outFile": "css/style.css",
  "outputStyle": "expanded"
}
```

- *file: is the path to the SCSS file*

- *outFile: is the output file path for the compiled CSS*

- *outputStyle: is the output style for the compiled CSS*

This JSON file specifies the input SCSS file, the output CSS file, and the output style (expanded in this case, which means that the CSS will be written in a human-readable format).

- Compile the SCSS: To compile the SCSS, you will need to use the node-sass library to read the JSON file and compile the SCSS. Here is an example of how you might do this using JavaScript *(pick a method that works for you)*:

<p align="center" style="font-size:40px;">Method 1</p>   

```js
// These two are libraries (we need to use npm or pm2 to install it)
const sass = require('node-sass');
const fs = require('fs');

// Read the JSON file
const options = JSON.parse(fs.readFileSync('options.json', 'utf8'));

// Render the SCSS to CSS
sass.render(options, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    // Write the CSS to a file
    fs.writeFileSync(options.outFile, result.css);
  }
});
```


<p align="center" style="font-size:40px;">Method 2</p>  

  
For method 2 the code will read the JSON configuration file at path/to/config.json, parse it to get the configuration object, and then pass the configuration to the renderScss function. The renderScss function will use the node-sass library to compile the SCSS file specified in the file property of the config object to CSS, using the outputStyle specified in the config object. It will then write the CSS to the file specified in the outFile property of the config object.


```js
// These two are libraries (we need to use npm or pm2 to install it)
const fs = require('fs');
const sass = require('node-sass');

function renderScss(config) {
  const { file, outFile, outputStyle } = config;

  sass.render({
    file,
    outputStyle
  }, function(error, result) {
    if (error) {
      console.error(error);
      return;
    }

    fs.writeFile(outFile, result.css, function(writeError) {
      if (writeError) {
        console.error(writeError);
        return;
      }

      console.log(`SCSS compiled to ${outFile}`);
    });
  });
}

fs.readFile('path/to/config.json', 'utf8', function(error, data) {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const config = JSON.parse(data);
    renderScss(config);
  } catch(parseError) {
    console.error(parseError);
  }
});
```

Depending what method the code reads the JSON file, compiles the SCSS using the node-sass library, and writes the resulting CSS to a file.


### Compiling a JSON file

Before compiling, we need to understand what is npm doing. The npm install command installs **packages** listed in the **dependencies** section of your **package.json** file in the ***current directory***. For example, if we want to render a SCSS to CSS using method III, we need to install npm for **current directory**:

```bash
cd go/to/your/current/directory/to/use/npm_or_pm2
```

Then we are going to **install packages** for the **current directory**. Using the example JSON File, I need the following packages for the JavaScript file:

```bash
npm i fs node-sass
```

You should see a forlder called **node-modules**, **package.json**, and **package-lock.json** where these files are the default in order to render SCSS to CSS *(using the JSON File example)*. 

To compile the code we need to open the **package.json** file that we have downloaded from npm. We should see the following *(if you installed the same packages, different packages will differ but same concept)*:

<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/211172248-1e0012be-a3c1-4895-b10f-ae8827410b86.png">
</p>

If you see all of the packages you have installed and need then perfect!!! To know what packages you are using look at method III first two lines :).


Before compiling, we need to setup our **package.json** file to use any of the npm commands. Use the following command:


```bash
npm init 
```

Type in all the necessary information and one prompt it will ask is **test command:** where we need to input a npm command in the JSON package file *(if you are using the example)*:

```json
test command: node your_javascript_file_name.js
```

Once you finish with **npm init**, open the **package.json** file, and we should see the file modified:


<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/211173572-ff036500-ec89-4c9b-a2ac-549c3096edbf.png">
</p>

Do you see the word ***start***, ***you may be different***, that is the command line to run the JavaScript file!!! So we do the following:

```bash
npm run start
```

You are done:), what a hassle :D

Overall, this section we created the JSON file that had following commands and used JavaScript to tell how to render SCSS to CSS. In order to do so, we need to install the libraries from npm and then ceate the **npm init**. Where we have to create the file of the **package.json** information and the command line. Then we had to made sure that the JSON file had the correct directories such as where the SCSS file was and to create a new CSS file. Then we can run the npm file where we get the following:

  <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/211173829-a82a02dd-9d9e-4763-91b0-762c6a76343c.png">
</p>
  
  <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/211173853-c5c43dd5-6f34-4e43-a3f4-15a9ac956e37.png">
</p>

  <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/211173885-d879a11d-c097-47f9-bebc-c2d6b171cb98.png">
</p>

  <p align="center">
<img src="https://user-images.githubusercontent.com/54751574/211173904-b9573863-062b-4d17-8ee2-0c240d325069.png">
</p>







# 3D Animation [three.js]
three.js is a JavaScript library that allows you to create 3D graphics in the browser using WebGL (Web Graphics Library). It provides a set of APIs that make it easy to create 3D objects, animations, and interactivity in web pages. three.js is often used for creating 3D visualizations, games, and other interactive content for the web.

You can do a wide variety of things with three.js, including:

- Creating 3D objects and shapes
- Applying materials and textures to objects
- Animating objects
- Adding lighting and shadows
- Adding camera controls
- Adding interactivity through user input
- There are few limits to what you can do with three.js, as long as your computer has the resources to handle the graphics. However, keep in mind that three.js is designed to create interactive 3D graphics in the browser, and it may not be the best choice for tasks that are outside of this scope. To check if your browser supports click [WebGL Checker](https://get.webgl.org). If WebGL is disable then go to your **browser settings** and **enable hardware accelaration**.

To use three.js, you will need a web browser that supports WebGL. You will also need to include the three.js library in your project by either downloading it and linking to it locally, or by including it from a CDN (Content Delivery Network) in your HTML file. Here is an example of how you can include three.js from a CDN in your HTML file:

```bash
looking for the command line
```

### Run a local server 

Many programming languages have simple HTTP servers built in. They are not as full featured as **production servers** such as [Apache](https://www.apache.org) and [NGINX](https://nginx.org). To learn more about the following topic then click on [link](https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally) and [link](https://threejs.org/docs/#manual/en/introduction/Loading-3D-models).


### Using three.js library on npm (Method 1)

You can download the three.js library from the official [three.js](https://threejs.org/docs/#manual/en/introduction/Installation) or you can use npm by doing the following command *(NOTE: The three.js link gives you options how to install three.js library)*:

```bash
npm i three
```

Once you choose what method to install **three.js**, you need to do the next following command like usual: 

```bash
npm init
```

Once you are done then open your empty JavaScript file and as an example you could do the following:

```js
// Only the Node/npm method you have to install the library like this
const THREE = require('three');

// Using some library
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
```

Note, this is only if you use the node method, if you use the browser library then you need to import the function differently.

### Using three.js library importing using the browser (Method 2)

If method 1 is to difficult you could try to using the browser where we need to create a code for HTML and JavaScript. First for Javascript we need to do the following:

```js
import * as THREE from 'https://threejs.org/build/three.module.js'

// Using some library
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
```

Then in HTML we need to do the following:

```html
<script src="three.module.js" type="module"></script>
<script src="three.js"></script>
<script src="OrbitControls.js"></script>
<script src="script.js" type="module"></script>
```

# LaTeX
It is possible to include LaTeX in HTML, CSS, and JavaScript. Here are a few options for how you can do this:

- Use a LaTeX library in your JavaScript code: There are several JavaScript libraries that can be used to parse and render LaTeX expressions in your web page. One example is [MathJax](https://www.mathjax.org/).

- Use a LaTeX to HTML converter: There are online tools that can convert LaTeX expressions to HTML code that can be included in your web page. One example is [LaTeX to HTML](https://latex2html.org/).

- Use an image of the LaTeX expression: You can use an image of the LaTeX expression in your web page by using a LaTeX rendering service that generates an image of the expression and provides the URL of the image. One example is [LaTeX Render](https://latex.artofproblemsolving.com/).

Use an inline <math> element: HTML5 includes an inline <math> element that can be used to include mathematical expressions in your HTML code. This element can be styled with CSS and manipulated with JavaScript.







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
  - [CSS Processors](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
  - [Using SCSS instead of CSS](https://www.freecodecamp.org/news/how-to-use-sass-with-css/)
  - [All info for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
  - [Introduction to CSS](https://www.w3schools.com/css/default.asp)
  - [CSS * Selector](https://www.w3schools.com/cssref/sel_all.php)
  - [Finding a font to be implemented in CSS/HTML](https://fonts.google.com)
  - [CSS Display Functionalities](https://www.w3schools.com/cssref/pr_class_display.php)
  - [CSS Grid Layout Module](https://www.w3schools.com/css/css_grid.asp)
  - [Color Wheel](https://color.adobe.com/create/color-wheel)
  - [CSS Media Screen](https://www.w3schools.com/cssref/css3_pr_mediaquery.php)
  - [Front End Web Development](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer)
  - [CSS Icon Code](https://css.gg/app)
  - [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  
- JavaScript
  - [All info for JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
  - [JavaScript Let function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - [JavaScript Const function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - [JavaScript Array Push function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  - [JavaScript forEach function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [JavaScript Mozilla Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
  
- API
  - [Mozilla API reference](https://developer.mozilla.org/en-US/docs/Web/API)  
  - [Mozilla Introduction API reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  
- JSON
  - [Mozilla JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
  
- pm2
  - [pm2 (alternative of npm)](https://pm2.keymetrics.io)
  - [pm2 documentation](https://pm2.keymetrics.io/docs/)
  - [digital ocean](https://www.digitalocean.com/community/tutorials/getting-started-with-pm2)
  - [lynda](https://www.lynda.com/Node-js-tutorials/PM2-Production-Process-Manager-Node-js/477578-2.html)
  
- Node.js (npm)
  - [Node.js (npm)](https://nodejs.org/en/)
  - [npm documentation](https://docs.npmjs.com/)
  - [tutorials](https://npmjs.com/tutorials)
  - [Crash Course](https://www.youtube.com/watch?v=jHDhaSSKmB0)
  - [tutorialsteacher](https://www.tutorialsteacher.com/nodejs/learn-npm)
  
- Alternative To Host a Website
  -  [Reddit recommendations](https://www.reddit.com/r/webdev/comments/pmp1ub/using_github_repo_as_a_free_hosting_option_for/)
  
- LaTeX in Web
  - [vercel](https://latex.vercel.app)
  
- Three.js (WebGL)
  - [three.js libraries](https://www.jsdelivr.com/?docs=gh)
  - [three.js documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
  - [Mozilla Docs three.js](https://developer.mozilla.org/en-US/docs/Glossary/Three_js)
  - [Mozilla Docs WebGL](https://developer.mozilla.org/en-US/docs/Glossary/WebGL)
  
- Courses
  - [HTML and CSS](https://learnhtmlcss.online)
  - [HTML and CSS II](https://www.internetingishard.com)
  - [HTML and CSS III](https://learn.shayhowe.com/html-css/)
  - [CSS Layout](https://learnlayout.com)
  - [CSS Advanced](https://www.htmldog.com/guides/css/advanced/)
  - [Computer Programming](https://www.edx.org/learn)
  - [JavaScript](https://learnjavascript.online)
  - [JavaScript II](https://javascript.info)
  
- Online Editor
  - [programiz](https://www.programiz.com/html/online-compiler/)
  - [DartPad](https://dartpad.dartlang.org/)
  - [codepen](https://codepen.io/)
  - [jsfiddle](https://jsfiddle.net)
