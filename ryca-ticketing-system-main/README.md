# RYCA Ticket System Application

This Ticket System Application is a Node.js-based RESTful API that allows users, support agents, and admins to manage customer support tickets. The system includes authentication, role-based access control, and email notifications for key actions such as ticket assignment and status changes.

## Features

### 1. **User Authentication**
   - **Registration**: Users can register by providing a username, email, password, and role (customer, support agent, or admin).
   - **Login**: Registered users can log in with their credentials (username/email and password) to receive a JWT token for authentication.
   - **JWT-based Authentication**: Secure access to the API endpoints is enforced using JWT tokens.

### 2. **Role-Based Access Control**
   - **Customer**: 
     - Can create tickets.
   - **Support Agent**:
     - Can create, update (change status), and assign tickets.
   - **Admin**:
     - Has full control: can create, update, delete, and assign tickets.

### 3. **Ticket Management**
   - **Create Ticket**: Customers, support agents, and admins can create support tickets.
   - **Update Ticket**: Support agents and admins can update ticket details, including changing the status.
   - **Delete Ticket**: Admins can delete tickets.
   - **Assign Ticket**: Support agents and admins can assign tickets to specific support agents.

### 4. **Email Notifications**
   - **Ticket Assignment**: When a ticket is assigned to a support agent, email notifications are sent to the support agent and the ticket creator.
   - **Status Updates**: When a ticket's status changes, email notifications are sent to the ticket creator, assigned support agent, and all admins.

### 5. **Database Interaction**
   - The application uses MongoDB for storing user and ticket data.
   - The application can interact with the database both through Mongoose models and direct MongoDB queries.

### 6. **Security**
   - Passwords are securely hashed using bcrypt.
   - Sensitive data such as JWT secrets and email credentials are managed via environment variables.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ticket-system.git
   cd ticket-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

4. **Run the application:**

   ```bash
   nodemon index.js
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication
- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login with username/email and password.

### Ticket Management
- **POST /tickets/create**: Create a new ticket (Role: Customer, Support Agent, Admin).
- **PATCH /tickets/update/:id**: Update ticket details (Role: Support Agent, Admin).
- **DELETE /tickets/delete/:id**: Delete a ticket (Role: Admin).
- **PATCH /tickets/assign/:id**: Assign a ticket to a support agent (Role: Support Agent, Admin).

## Usage Example

1. **Register a User:**

   ```bash
   POST /auth/register
   Content-Type: application/json

   {
     "username": "testuser",
     "email": "testuser@example.com",
     "password": "securepassword",
     "role": "customer"
   }
   ```

2. **Login a User:**

   ```bash
   POST /auth/login
   Content-Type: application/json

   {
     "username": "testuser",
     "password": "securepassword"
   }
   ```

3. **Create a Ticket:**

   ```bash
   POST /tickets/create
   Authorization: Bearer <your-jwt-token>
   Content-Type: application/json

   {
     "title": "Issue with the product"
   }
   ```

4. **Assign a Ticket:**

   ```bash
   PATCH /tickets/assign/12345
   Authorization: Bearer <your-jwt-token>
   Content-Type: application/json

   {
     "assignedTo": "supportAgentUsername"
   }
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
