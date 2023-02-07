from django.core.mail import send_mail

def send_email_confirmation(adoption):
    subject = "Adoption made succesfully."
    content = f"Thank you for adopting {adoption.pet.name} with the monthly donation of $ {adoption.value}"
    sender = "dotmakoto@gmail.com"
    destination = [adoption.email]
    send_mail(subject, content, sender, destination)