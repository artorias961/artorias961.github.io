# Creating a Website

The following code will be using [Mozilla Documentation](https://developer.mozilla.org/en-US/). There are four languages we need to focus on:
- HTML
  - Creates the structure of the website
- CSS
  - Makes the website looks very nice
- JavaScript
  - Does interaction for the website. Think of this one uploading it or downloading some file
- Python
  - We will be using python in built function to make a local server for now. Later on, we can make an official server but our purposes is to practice.


# Programs
The IDE I will be using is [Visual Studio Code](https://code.visualstudio.com) and the conda environment [miniforge3](https://github.com/conda-forge/miniforge). You are not limited to these, you are welcome to find what works best for you. 

### Installing Mambaforge

Go to [miniforge3](https://github.com/conda-forge/miniforge). Download and run the file then the first prompt should be

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
 
Once you have finished installing mambaforge or miniforge, open the application and to install python libraries then do a pip install in the terminal of mambaforge/miniforge
 
<p align="center">
<img src="https://user-images.githubusercontent.com/54751574/196763266-d4924202-5e2d-4f49-9e84-9969801a6b25.png">
</p>
 
### 












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

# Libraries
- pip install Flask
