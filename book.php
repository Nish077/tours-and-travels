<?php
// Include database configuration
include 'config.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $tour = $_POST['tour'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    // Prepare an SQL statement to insert the data
    $stmt = $conn->prepare("INSERT INTO bookings (name, email, phone, tour, date, message) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $email, $phone, $tour, $date, $message);

    // Execute the query
    if ($stmt->execute()) {
       echo "Booking successful";
        header("Location: sucess.html"); // Redirect to thank you page
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
