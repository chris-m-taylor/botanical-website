from http.server import BaseHTTPRequestHandler
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
import json

load_dotenv()  # take environment variables from .env.

SG_API_KEY = os.environ.get("SEND_GRID_API_KEY", "Couldn't find")
FROM_EMAIL = os.environ.get("FROM_EMAIL", "Couldn't find")
TO_EMAIL = os.environ.get("TO_EMAIL", "Couldn't find")

"""
    Mock request
    {
        "fullName": "Chris Taylor",
        "senderEmail": "fake@gmail.com",
        "message": "<h1>yoooo</h1> this is it baby"
    }
"""
class handler(BaseHTTPRequestHandler):

    def parse_request_body(self):
        content_len = int(self.headers.get('Content-Length'), 0)
        post_body = self.rfile.read(content_len)
        return json.loads(post_body.decode('utf-8'))  

    def create_message_from_request_body(self, request_dict):
        return Mail(
            from_email=FROM_EMAIL,
            to_emails=TO_EMAIL,
            subject="BOTANICAL SELECTIONS INQUIRY",
            html_content=f"{request_dict['fullName']} sent a message: {request_dict['message']}. Reply to {request_dict['senderEmail']}")

    def do_POST(self):
        
        request_dict = self.parse_request_body()
        message_formatted_for_sendgrid = self.create_message_from_request_body(request_dict)

        # using SendGrid's Python Library
        # https://github.com/sendgrid/sendgrid-python
        try:
            sg = SendGridAPIClient(SG_API_KEY)
            response = sg.send(message_formatted_for_sendgrid)
            self.send_response(response.status_code)
        except Exception as e:
            print(e.body)

        self.send_header('Content-type','text/plain')
        self.end_headers()
        return
