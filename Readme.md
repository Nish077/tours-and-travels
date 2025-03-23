# Travel & Tour Website

## Introduction
The Travel & Tour Website is a comprehensive online platform designed to cater to the needs of travelers seeking seamless booking and planning experiences.

## Installation and Running Locally Using XAMPP

To run the Travel & Tour Website locally using XAMPP, follow these steps:

- Clone the repository from the provided GitHub link.
- Install XAMPP on your system if you haven't already.
- Copy the cloned repository files to the `htdocs` folder within your XAMPP installation directory.
- Start the Apache and MySQL services in the XAMPP Control Panel.
- Open a web browser and navigate to `http://localhost/travel-website` to access the Travel & Tour Website.



## Database Information
The Travel & Tour Website uses a MySQL database with two tables: bookings and users.
bookings Table
The bookings table stores information about travel bookings made by users. The table structure is as follows:

## for booking table
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| id          | int(11)     | NO   | PRI | NULL    | auto_increment |
| name        | varchar(50) | NO   |     | NULL    |       |
| email       | varchar(50) | NO   |     | NULL    |       |
| phone       | varchar(20) | NO   |     | NULL    |       |
| tour        | varchar(20) | NO   |     | NULL    |       |
| date        | date        | NO   |     | NULL    |       |
| message     | text        | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+

## for user table
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| id         | int(11)     | NO   | PRI | NULL    | auto_increment |
| username   | varchar(50) | NO   |     | NULL    |       |
| email      | varchar(50) | NO   |     | NULL    |       |
| address    | varchar(100)| NO   |     | NULL    |       |
| password   | varchar(100)| NO   |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+

## queries to create the tables
CREATE TABLE `bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `tour` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;