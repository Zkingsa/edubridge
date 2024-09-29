<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "edubridge";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$email = $_POST['email'];
$password = $_POST['password'];

// SQL query to select data
$sql = "SELECT firstName, lastName, gender, email, number FROM registration WHERE email = ? AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

// Check if there are results
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "First Name: " . $row["firstName"]. " - Last Name: " . $row["lastName"]. " - Gender: " . $row["gender"]. " - Email: " . $row["email"]. " - Phone Number: " . $row["number"]. "<br>";
    }
} else {
    echo "No results found";
}

// Close connection
$stmt->close();
$conn->close();
?>
