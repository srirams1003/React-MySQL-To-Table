<!-- ABOUT THE PROJECT -->
## About The Project

A React.js App that reads data from a MySQL database and displays it as a reader-friendly table on a web browser.


### Built With

* React.js
* Node.js
* MySQL


<!-- GETTING STARTED -->
## Getting Started


### If you do not have mysql-server installed, follow these steps:


To set up your MySQL server from scratch and configure it for your application, follow these steps:

1. **Install MySQL Server:**

   If MySQL is not already installed, install it using your package manager. For example, on Ubuntu:

   ```bash
   sudo apt update
   sudo apt install mysql-server
   ```

2. **Secure MySQL Installation:**

   Run the MySQL secure installation script to set up the root password and secure your installation:

   ```bash
   sudo mysql_secure_installation
   ```

   Follow the prompts to configure security settings.

3. **Log in to MySQL as Root:**

   ```bash
   sudo mysql
   ```

4. **Create the Database and User:**

   Inside the MySQL shell, create the database and user, and grant the necessary privileges:

   ```bash
   CREATE DATABASE mysqlreact;
   
   CREATE USER 'reactapp'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY '12345';
   CREATE USER 'reactapp'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
   
   GRANT ALL PRIVILEGES ON mysqlreact.* TO 'reactapp'@'127.0.0.1';
   GRANT ALL PRIVILEGES ON mysqlreact.* TO 'reactapp'@'localhost';
   
   FLUSH PRIVILEGES;
   ```

5. **Exit MySQL:**

   ```sql
   EXIT;
   ```



### Installation
I will assume that you have MySQL and Node.js installed and that you are in the root directory of this repository.
Once you have the above packages installed, execute the steps below.

* installing backend dependencies
  ```sh
  npm install
  ```
* installing frontend dependencies
  ```sh
  cd client
  npm install
  ```



### Running
Assuming here that you have executed all the steps in the "Installation" phase above correctly. Next:

* Return to the root directory of the repository first. Then, execute the following command:
  ```sh
  npm run dev
  ```

