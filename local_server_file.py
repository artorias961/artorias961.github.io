from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

@app.route('/home')
def hello_name(name):
     return 'Hello ArtyChan T-T'

if __name__ == '__main__':
     hello_name()
     app.run(host="0.0.0.0", port=80)
#    print("To run the program type in the following on the terminal:")
#    print("flask --app .\local_server_file.py run")
#    print("\t OR")
#    print("flask --app .\local_server_file.py --debug run")