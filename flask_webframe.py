from flask import Flask, render_template
import http.server
import socketserver
import requests
import json

app = Flask(__name__)


@app.route('/')
def hello_name():
     return render_template('main_page.html')


if __name__ == '__main__':
     hello_name()
     app.run(debug=True, port=8000)
#    app.run(debug=True, host="0.0.0.0", port=80)
#    print("To run the program type in the following on the terminal:")
#    print("flask --app .\local_server_file.py run")
#    print("\t OR")
#    print("flask --app .\local_server_file.py --debug run")c