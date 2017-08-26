CREATE DATABASE IF NOT EXISTS propertyManager_db;
USE propertyManager_db;

CREATE TABLE Worktickets (
    WTID INT AUTO_INCREMENT NOT NULL,
    TenantID INT NOT NULL,
    Subject VARCHAR(255),
    Message VARCHAR(5000),
    Status VARCHAR(255),
    Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (WTID)
);