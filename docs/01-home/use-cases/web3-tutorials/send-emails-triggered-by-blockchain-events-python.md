---
title: "Send Emails Triggered By Blockchain Events (Python)"
slug: "send-emails-triggered-by-blockchain-events-python"
hidden: true
createdAt: "2022-11-28T00:35:38.175Z"
updatedAt: "2022-11-28T18:40:00.124Z"
---
## Introduction

This tutorial teaches you how to use the Streams API to trigger automatic sending of emails based on blockchain events in a Python app. This app will use [Flask](https://flask.palletsprojects.com/en/2.2.x/), a web framework.

You can find the repository with the [final code here](https://github.com/MoralisWeb3/youtube-tutorials/tree/main/automateEmails).

## YouTube Tutorial

https://www.youtube.com/watch?v=PO34iuXZ7DA

## How to Get Started

1. Create a Python app
2. Create a stream using the [Streams API](https://docs.moralis.io/docs/what-is-streams-api-1)
3. Integrate your app with Moralis services

## Prerequisites

1. Install [Python 3](https://www.python.org/downloads/)

## Initial Setup

1. In a new folder for your project, run the follow commands:

```shell
python3 -m venv venv
or
python -m venv venv

source venv/bin/activate 
or 
./venv/Scripts/activate

pip install flask flask-cors
```



2. Create a new file called `backend.py` and add:

```python
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/streams', methods=["POST"])
def streams():
  
  details = request.json
  print(details)
  
  return jsonify(success=True)

if __name__ == "__main__":
  app.run(host="127.0.0.1", port=3000, debug=True)
```



3. Run our new script:

```shell
python3 backend.py
or
python backend.py
```



## Setting Up Ngrok

We will need to expose this server so it can be reached from outside our local network. We can use [ngrok](https://ngrok.com/).

1. Follow the [ngrok setup instructions here](https://ngrok.com/download).
2. Run `ngrok` on port 3000:

If successful, you should see output similar to the following where an Ngrok URL is mapped to your local server:

```text
Forwarding https://***.ngrok.io -> http://localhost:3000 
```



This `ngrok.io` URL is what you will use when setting up the stream to receive the webhooks.

## Setting Up Our Stream

Now we will set up a stream to send webhooks to our `/streams` endpoint. You can [follow this guide](https://docs.moralis.io/docs/using-webui) to get started.

1. Create a new stream and select "Create From Scratch".
2. Use these options (for an example contract, you can use your own) for your stream:

- **address** =`0xbd317b46a004ccf0e1773dbfcee89e77e32d2db9`
- **description** = `New Donation`
- **webhook URL** = [`https://***.ngrok.io/streams`](https://***.ngrok.io/streams)
- **tag** = `NewDonation`
- **network** = `Polygon Mumbai`

![](https://files.readme.io/b394c7c-Python_1.png)

3. Tick "Native Transactions (txs)" and then "Create Stream".

![](https://files.readme.io/6fe31c4-Python_2.png)

You should be redirected to [`https://admin.moralis.io/streams`](https://admin.moralis.io/streams). Then check your server's terminal, you should see an empty webhook which confirms the stream was created:

```json
{'abi': [], 'block': {'number': '', 'hash': '', 'timestamp': ''}, 'txs': [], 'txsInternal': [], 'logs': [], 'chainId': '', 'confirmed': True, 'retries': 0, 'tag': '', 'streamId': '', 'erc20Approvals': [], 'erc20Transfers': [], 'nftApprovals': {'ERC721': [], 'ERC1155': []}, 'nftTransfers': []}
```



We can test this stream by going to the [contract page](https://mumbai.polygonscan.com/address/0xbd317b46a004ccf0e1773dbfcee89e77e32d2db9#writeContract), connecting your MetaMask wallet, and calling `newDonation`. You should eventually see a valid webhook in your terminal.

## Setting Up Email Notifications

Now we will set up the automatic emailing feature in our Python app. 

For this demo you will need a [Gmail account](http://gmail.com/) with 2-Step Verification enabled. Follow the [instructions here](https://support.google.com/accounts/answer/185833?hl=en) for creating an app password.

1. Create an app password using "Other" and call it `PythonMailer`.
2. Back in `backend.py`, at the top, add:

```python
from email.message import EmailMessage
import ssl3
import smtplib

emailPass = "apppasswordhere"
email = "gmailaddress"
emailReceiver = "gmailaddress" # we will use the same email for both `email` and `emailReceiver`
subject="New Donation"
```



3. Change the `streams` function code to:

```python
def streams():

    if (request.json['confirmed']):
        return jsonify(success=True)


    details = request.json["txs"]

    for donation in details:

        amount = int(donation['value'])/1000000000000000000
        em = EmailMessage()
        em['From'] = email
        em['To'] = emailReceiver
        em['Subject'] = subject

        em.set_content(donation['fromAddress'] + " has just sent you " + str(amount) + " in MATIC!")

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email, emailPass)
            smtp.sendmail(email, emailReceiver, em.as_string())
    
    print("Email Sent")

    return jsonify(success=True)
```



Your final `backend.py` should look like this:

```python
from email.message import EmailMessage
import ssl3
import smtplib

emailPass = "apppasswordhere"
email = "gmailaddress"
emailReceiver = "gmailaddress" # we will use the same email for both `email` and `emailReceiver`
subject="New Donation"

app = Flask(__name__)
CORS(app)

@app.route('/streams', methods=["POST"])
def streams():

    if (request.json['confirmed']):
        return jsonify(success=True)


    details = request.json["txs"]

    for donation in details:

        amount = int(donation['value'])/1000000000000000000
        em = EmailMessage()
        em['From'] = email
        em['To'] = emailReceiver
        em['Subject'] = subject

        em.set_content(donation['fromAddress'] + " has just sent you " + str(amount) + " in MATIC!")

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email, emailPass)
            smtp.sendmail(email, emailReceiver, em.as_string())
    
    print("Email Sent")

    return jsonify(success=True)

if __name__ == "__main__":
  app.run(host="127.0.0.1", port=3000, debug=True)
```



4. Create another donation on the contract (`newDonation`) to test this functionality. You may need to wait a few minutes until the transaction is confirmed on the blockchain before the email is sent.

If successful, in your terminal you will see "Email Sent" printed and an email sent to the email address (set in `emailReceiver`).