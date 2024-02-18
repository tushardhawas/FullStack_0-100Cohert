# Authentication System

This project is an authentication system built with Node.js, Express, and MongoDB. It provides endpoints for user registration, login, token generation, and token refresh.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
git clone https://github.com/your-username/authentication-system.git

2. Navigate to the project directory:
cd authentication-system

3. Install dependencies using npm:
npm install


This will install all the required dependencies listed in the package.json file and generate the node_modules folder.

## Usage

Once the dependencies are installed, you can start the server using the following command:
npm start


This will start the server on the default port (usually 3000). You can then access the endpoints using a tool like Postman or by making HTTP requests from your frontend application.

The available endpoints are:

- POST /auth/register: Register a new user.
- POST /auth/login: Login with existing credentials and receive access and refresh tokens.
- POST /auth/refresh-token: Refresh the access token using a valid refresh token.
- DELETE /auth/logout: Log out the user and invalidate the refresh token.

Make sure to set up environment variables for your MongoDB connection string and token secrets in a .env file.

## Contributing

Contributions to this project are welcome! If you have any improvements or new features to suggest, please open an issue or create a pull request following the guidelines in the CONTRIBUTING.md file.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

If you have any questions or need further assistance, feel free to contact Tushar Dhawas at tushardhawasssd@gmail.com.



