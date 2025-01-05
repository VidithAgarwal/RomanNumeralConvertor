**Roman Numeral Converter**
===========================

A full-stack web application that converts integers (1 to 3999) into Roman numerals. Built with React for the frontend and Node.js with Express for the backend, this project is designed for scalability, maintainability, and monitoring. The app includes robust error handling, Prometheus-based metrics, and comprehensive test coverage.

* * * * *

**Table of Contents**
---------------------

1.  [Features](#features)
2.  [How to Build and Run the Project](#how-to-build-and-run-the-project)
3.  [Environment Variables (`.env` Setup)](#environment-variables-env-setup)
4.  [Engineering and Testing Methodology](#engineering-and-testing-methodology)
5.  [Packaging Layout](#packaging-layout)
6.  [Dependency Attribution](#dependency-attribution)
7.  [Tests](#tests)
8.  [Error Handling](#error-handling)
9.  [Inline Documentation](#inline-documentation)

* * * * *

**Features**
------------

-   **Roman Numeral Conversion**: Converts integers (1 to 3999) to Roman numerals.
-   **Error Handling**: Comprehensive validation for invalid, out-of-range, or malformed inputs.
-   **Monitoring**: Prometheus metrics for HTTP requests, response times, and conversion success/failure.
-   **Testing**: Includes unit and integration tests for backend services.
-   **Customizable Themes**: Light and dark themes for better user experience.

* * * * *

**How to Build and Run the Project**
------------------------------------

### **1\. Prerequisites**

Before starting, ensure the following are installed:

-   **Node.js** (v16 or higher): [Download Node.js](https://nodejs.org/)
-   **Git**: [Download Git](https://git-scm.com/)
-   **Docker Desktop**: Download Docker Desktop
-   **Prometheus** (for monitoring): Download Prometheus
-   **Jest** (globally installed for tests):

    ```bash

        npm install -g jest

    ```

### **2\. Clone the Repository**

1.  Open a terminal or command prompt.
2.  Clone the repository:

    ```bash

    git clone https://github.com/your-username/roman-numeral-converter.git
    
    ```

3.  Navigate to the project directory:

    bash

    Copy code

    `cd roman-numeral-converter`

* * * * *

### **3\. Environment Variables (`.env` Setup)**

The project uses environment variables for configuration. Create `.env` files in both the **backend (`server`)** and **frontend (`client`)** directories.

#### **Backend (`server/.env`)**

Navigate to the `server` directory and create a `.env` file:

bash

Copy code

`cd server
touch .env`

Add the following variables:

env

Copy code

`NODE_ENV=development
PORT=8080`

-   **`NODE_ENV`**: Environment type (`development` or `production`).
-   **`PORT`**: Port for the backend server.

#### **Frontend (`client/.env`)**

Navigate to the `client` directory and create a `.env` file:

bash

Copy code

`cd client
touch .env`

Add the following variables:

env

Copy code

`VITE_API_URL=http://localhost:8080`

-   **`VITE_API_URL`**: URL for the backend API.

* * * * *

### **4\. Running with Docker**

1.  **Ensure Docker Desktop is Running.**

2.  **Build and Run the Application:**

    bash

    Copy code

    `docker-compose up --build`

3.  **Access the Application:**

    -   **Frontend**: <http://localhost>
    -   **Backend**: <http://localhost:8080>
4.  **Stop the Application:** Press `Ctrl + C` in the terminal and run:

    bash

    Copy code

    `docker-compose down`

* * * * *

### **5\. Running Without Docker**

#### **Frontend**

1.  Navigate to the `client` directory:

    bash

    Copy code

    `cd client`

2.  Install dependencies:

    bash

    Copy code

    `npm install`

3.  Start the development server:

    bash

    Copy code

    `npm run dev`

4.  Open <http://localhost:5173>.

#### **Backend**

1.  Open a new terminal and navigate to the `server` directory:

    bash

    Copy code

    `cd server`

2.  Install dependencies:

    bash

    Copy code

    `npm install`

3.  Start the backend server:

    bash

    Copy code

    `npm start`

4.  Access the backend at <http://localhost:8080>.

* * * * *

**Engineering and Testing Methodology**
---------------------------------------

### **Engineering**

-   **Clean Architecture**: Modular design with clear separation of concerns (e.g., routes, controllers, services).
-   **Metrics and Monitoring**: Prometheus client for tracking HTTP requests, response times, and conversion success rates.
-   **Robust Error Handling**: Centralized middleware for capturing and logging errors.

### **Testing**

-   **Unit Tests**: Test individual modules and services using Jest.
-   **Integration Tests**: Validate interactions between endpoints and business logic.
-   **Test Coverage**:
    -   Validate Roman numeral conversions.
    -   Ensure error handling for invalid inputs.
    -   Test API responses and status codes.

* * * * *

**Packaging Layout**
--------------------

plaintext

Copy code

`RomanConverter/
├── client/               # Frontend React application
│   ├── public/           # Public assets
│   ├── src/              # React components, styles, and services
│   └── package.json      # Frontend dependencies
├── server/               # Backend Express application
│   ├── src/
│   │   ├── controllers/  # Request handling logic
│   │   ├── routes/       # API endpoints
│   │   ├── middleware/   # Metrics and error handling
│   │   ├── utils/        # Utilities (e.g., logger)
│   │   └── tests/        # Unit and integration tests
│   ├── package.json      # Backend dependencies
├── docker-compose.yml    # Docker Compose configuration
└── README.md             # Project documentation`

* * * * *

**Dependency Attribution**
--------------------------

### **Frontend**

-   **React**: [React Documentation](https://reactjs.org/)
-   **Adobe React Spectrum**: [React Spectrum Docs](https://react-spectrum.adobe.com/)
-   **Vite**: [Vite Documentation](https://vitejs.dev/)

### **Backend**

-   **Express.js**: [Express Documentation](https://expressjs.com/)
-   **Prometheus Client**: [Prometheus Node.js Client](https://github.com/siimon/prom-client)
-   **Winston**: [Winston Logger Documentation](https://github.com/winstonjs/winston)

* * * * *

**Tests**
---------

### **Run Tests**

1.  Navigate to the `server` directory:

    bash

    Copy code

    `cd server`

2.  Run the tests:

    bash

    Copy code

    `npm test`

### **Test Cases**

-   **Unit Tests**:
    -   Validate Roman numeral conversions.
    -   Ensure proper input validation.
-   **Integration Tests**:
    -   Validate API endpoints with both valid and invalid inputs.
    -   Test HTTP status codes and responses.

* * * * *

**Error Handling**
------------------

1.  **Input Validation**:

    -   Ensures inputs are non-null, numeric, and within the valid range (1 to 3999).
2.  **Centralized Error Middleware**:

    -   Logs errors using Winston.
    -   Sends structured error responses with appropriate HTTP status codes.
3.  **Examples**:

    -   **Invalid Input**: Returns `400` with an error message.
    -   **Server Error**: Returns `500` with a generic error message.