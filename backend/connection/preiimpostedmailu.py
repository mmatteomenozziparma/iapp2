import smtplib  
from src.backend.connection.validation.model import user


sender = "sender@gmail.com"
receiver =  user.email
password =  user.password
subject = "Conformation E mail"
body = "This E mail is sending to{user.nick} to have subscrived to our site "

# header

server = smtplib.SMTP('*' , 587)
server.starttls()

try:
    server.login(sender,password)
    print("Logged in...")
    server.sendmail(sender, receiver, "message")
    print("Email has been sent!")

except smtplib.SMTPAuthenticationError:
    print("unable to sign in")

