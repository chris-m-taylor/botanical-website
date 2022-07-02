from http.server import BaseHTTPRequestHandler
import requests
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
import json
import time

load_dotenv()  # take environment variables from .env.

SG_API_KEY = os.environ.get("SEND_GRID_API_KEY", "Couldn't find")
FROM_EMAIL = os.environ.get("FROM_EMAIL", "Couldn't find")
TO_EMAIL = os.environ.get("TO_EMAIL", "Couldn't find")
RECAPTCHA_URL = os.environ.get("RECAPTCHA_URL", "Couldn't find")
RECAPTCHA_SECRET_KEY = os.environ.get("RECAPTCHA_SECRET_KEY", "Couldn't find")

"""
    Mock request
    {
        "fullName": "Chris Taylor",
        "senderEmail": "fake@gmail.com",
        "message": "<h1>yoooo</h1> this is it baby"
        "recaptchaToken": "adcsafsdf"
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

    def verify_recaptcha(self, response_token):
        request_object = {"secret": RECAPTCHA_SECRET_KEY, "response": response_token}
        response = requests.post(RECAPTCHA_URL, request_object)
        
        # turn response into dictionary
        response_dict = json.loads(response.content)
        print(response_dict)
        return response_dict['success'] == True

    def do_POST(self):
        
        request_dict = self.parse_request_body()
        message_formatted_for_sendgrid_to_botanical_email = self.create_message_from_request_body(request_dict)

        # Check to see if recaptcha is legit
        if not self.verify_recaptcha(request_dict["recaptchaToken"]):
            print("recaptcha was not verified")
            self.send_response(400, "recaptcha was not verified")

        else:
          time.sleep(1) # Allow time for "sending email" toast to show up for user
          print("Attempting to send email")
          # using SendGrid's Python Library
          # https://github.com/sendgrid/sendgrid-python
          try:
              sg = SendGridAPIClient(SG_API_KEY)
              response = sg.send(message_formatted_for_sendgrid_to_botanical_email)
              self.send_response(response.status_code)
          except Exception as e:
              print("problem occured in sending email")
              print(e)

        self.send_header('Content-type','text/plain')
        self.end_headers()
        return
