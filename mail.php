<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $user_name = $_POST["user_name"];
  $user_email = $_POST["user_email"];
  $user_project = $_POST["user_project"];

  // Set the email subject and body
  $subject = "New Contact Form Submission";
  $body = "You have received a new contact form submission.\n\n";
  $body .= "Names: $user_name\n";
  $body .= "Mail: $user_email\n";
  $body .= "Project: $user_project\n";

  // Set the email headers
  $headers = "From: $email\n";
  $headers .= "Reply-To: $user_email\n";

  // Send the email
  mail("jfenelus@jfenelus.com", $subject, $body, $headers);

  // Redirect the user to a thank-you page
  header("Location: thank-you.html");
}
?>