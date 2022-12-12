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