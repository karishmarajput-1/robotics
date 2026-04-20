-- MySQL Database Setup Script for ArRobotics
-- Run these commands in MySQL to set up the database and user

-- Create database
CREATE DATABASE IF NOT EXISTS arrobo;

-- Create user (change password as needed)
CREATE USER IF NOT EXISTS 'arrobo_user'@'localhost' IDENTIFIED BY 'password123';

-- Grant privileges
GRANT ALL PRIVILEGES ON arrobo.* TO 'arrobo_user'@'localhost';

-- Flush privileges to apply changes
FLUSH PRIVILEGES;

-- Select the database
USE arrobo;

-- View created tables (run after starting the backend)
-- SHOW TABLES;
-- SELECT * FROM users;
-- SELECT * FROM contacts;
-- SELECT * FROM jobs;

-- Reset everything (use with caution!)
-- DROP DATABASE IF EXISTS arrobo;
-- DROP USER IF EXISTS 'arrobo_user'@'localhost';
