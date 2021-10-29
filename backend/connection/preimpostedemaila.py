import smtplib
from backend.connection.validationa.modela import azienda 


sender = "sender@gmail.com"
receiver =  azienda.email
password =  azienda.password
subject = "Conformation E mail"
body = "This E mail is sending to{azienda.nomea} to have subscrived to our site "

# header

server = smtplib.SMTP('*' , 587)
server.starttls()

try:
    server.login(sender,password)
    print("Logged in...")
    server.sendmail(sender, receiver, message)
    print("Email has been sent!")

except smtplib.SMTPAuthenticationError:
    print("unable to sign in")

