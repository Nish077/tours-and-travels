<?php
// Include the database configuration file
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Secure the password

    // Prepare an SQL statement to insert the data
    $stmt = $conn->prepare("INSERT INTO users (username, email, address, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $email, $address, $password);

    // Execute the query
    if ($stmt->execute()) {
       
        header("Location: package.html");
        exit(); // Stop further script execution
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
