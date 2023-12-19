Welcome to the X-education! This server is designed by Syed Nazmul Hossain.

## Project Overview

This API is developed using JavaScript, Node.js, Express.js, and MongoDB to facilitate course management. To initiate interactions with the API, administrators are required to authenticate through a login process. Following authentication, administrators gain access to functionalities such as creating, updating, and deleting courses.

## Getting Started

Clone the project repository.
Create a .env file in the project root and include the following configurations:

```bash
        DB_URL: MongoDB database URL.
        PORT: Port for running the server.
        JWT_KEY: Secret key for JWT token generation.
```

Run the Project

Execute the following commands in the project directory:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nazmulhossain17/x-education.git

   ```

2. Navigate to the project directory:

   ```bash
    cd x-education
   ```

3. Install the project dependencies:
   ```bash
    npm install
   ```

This will install the required dependencies and start the server. The API will be accessible at the specified port.
Authentication

Admins: Use the login endpoint to authenticate as an administrator. After successful authentication, admin privileges are granted for course management.

Users: Create an account to access the course list. Users are restricted from creating, updating, or deleting courses. To become an admin, update the isAdmin field in the database to true.

Note:
Ensure that the MongoDB database is properly configured, and the necessary environment variables are provided for seamless operation.
