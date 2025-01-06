# **Roman Numeral Converter**

A full-stack web application designed to convert integers (1 to 3999) into Roman numerals. Built using React for the frontend and Node.js with Express for the backend, this project adheres to clean architecture principles, includes robust error handling, and provides monitoring via Prometheus metrics.

**Access the live application at:** **[http://3.142.145.188/](http://3.142.145.188/)**

---

## **Table of Contents**

1. [Features](#features)
2. [Roman Numeral Specification](#roman-numeral-specification)
3. [How to Build and Run the Project](#how-to-build-and-run-the-project)
4. [Environment Variables (`.env` Setup)](#environment-variables-env-setup)
5. [Engineering and Testing Methodology](#engineering-and-testing-methodology)
6. [Packaging Layout](#packaging-layout)
7. [Dependency Attribution](#dependency-attribution)
8. [Tests](#tests)
9. [Error Handling](#error-handling)
10. [Logging](#logging)
11. [Inline Documentation](#inline-documentation)

---

## **Features**

- **Roman Numeral Conversion**: Converts integers between 1 and 3999 to Roman numerals.
- **Error Handling**: Comprehensive input validation and detailed error reporting.
- **Metrics and Monitoring**: Integrated Prometheus metrics for tracking requests and application performance.
- **Testing**: Unit and integration tests to ensure reliability.
- **User Experience**: Light and dark themes for accessibility and usability.

---

## **Roman Numeral Specification**

The Roman numeral system is a numeral system originating in ancient Rome, employing combinations of letters from the Latin alphabet: **I, V, X, L, C, D, M**. Each numeral represents a specific value:
- **I = 1**, **V = 5**, **X = 10**, **L = 50**, **C = 100**, **D = 500**, **M = 1000**.

Numbers are formed by combining these numerals according to specific rules:
- Larger numerals before smaller ones indicate addition (e.g., VI = 6).
- Smaller numerals before larger ones indicate subtraction (e.g., IV = 4).

For detailed specifications, refer to [Wikipedia - Roman Numerals](https://en.wikipedia.org/wiki/Roman_numerals).

---

## **How to Build and Run the Project**

### **1. Prerequisites**

Ensure the following are installed:
- **Node.js** (v16 or higher): [Download Node.js](https://nodejs.org/)
- **Git**: [Download Git](https://git-scm.com/)
- **Docker Desktop**: [Download Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Prometheus** (for monitoring): [Download Prometheus](https://prometheus.io/download/)
- **Jest** (globally installed for tests):

  ```bash

  npm install -g jest 

  ```

* * * * *

### **2\. Clone the Repository**

1.  Clone the repository:

    ```bash


    git clone https://github.com/VidithAgarwal/RomanNumeralConvertor.git 

    ```

2.  Navigate to the project directory:

    ```bash


    cd RomanNumeralConvertor

    ```

* * * * *

### **3\. Environment Variables (`.env` Setup)**

#### **Backend (`server/.env`)**

Create a `.env` file in the `server` directory:

```env

NODE_ENV=development
PORT=8080

```

#### **Frontend (`client/.env`)**

Create a `.env` file in the `client` directory:

```env

VITE_API_URL=http://localhost:8080

```

* * * * *

### **4\. Running with Docker**

1.  Ensure Docker Desktop is running.

2.  Build and run the application:

    ```bash

    docker-compose up --build

    ```

3.  Access the application:

    -   **Frontend**: <http://localhost:80>
    -   **Backend**: <http://localhost:8080>
    -   **Prometheus**: <http://localhost:9090>
    -   **Grafana**: <http://localhost:3000>

4.  Stop the application:

    ```bash

    docker-compose down

    ```

* * * * *

### **5\. Running Without Docker**

#### **Frontend**

1.  Navigate to the `client` directory and install dependencies:

    ```bash

    cd client
    npm install

    ```

2.  Start the development server:

    ```bash

    npm run dev

    ```

3.  Access the frontend at <http://localhost:5173>.

#### **Backend**

1.  Navigate to the `server` directory and install dependencies:

    ```bash

    cd server
    npm install

    ```

2.  Start the backend server:

    ```bash

    npm start

    ```

3.  Access the backend at <http://localhost:8080>.

* * * * *

**Engineering and Testing Methodology**
---------------------------------------

### **Engineering**

-   **Clean Architecture**: Modular design with separate layers for routes, controllers, services, and utilities.
-   **Prometheus Monitoring**: Metrics for request counts, response latency, and conversion success/failure.
-   **Centralized Error Handling**: Middleware for logging and responding to errors.

### **Testing**

-   **Unit Tests**: Isolate and test individual components like services and utilities.
-   **Integration Tests**: Validate the interaction between routes, controllers, and services.
-   **Test Methodology**:
    1.  **Input Validation**:
        -   Verify that invalid inputs (e.g., non-numeric, out-of-range values) are handled correctly.
        -   Ensure valid inputs are processed without errors.
    2.  **Response Validation**:
        -   Check for correct HTTP status codes (`200`, `400`, `500`).
        -   Validate the accuracy of returned Roman numerals.
    3.  **Metrics Testing**:
        -   Ensure Prometheus metrics update correctly for successful and failed requests.

* * * * *

# Packaging Layout

```plaintext
RomanConverter/
├── client/                   # Frontend React application
│   ├── public/               # Static assets (e.g., index.html)
│   ├── src/                  # React components and styles
│   │   ├── components/       # Reusable React components
│   │   ├── services/         # API integration logic
|   |── .env                  # Environment variables for frontend
|   |── Dockerfile            # The docker file for the client
│   └── package.json          # Frontend dependencies
├── server/                   # Backend Express application
│   ├── src/
│   │   ├── controllers/      # Request handlers
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Metrics and error handling
│   │   ├── utils/            # Logging and validators
│   │   └── tests/            # Unit and integration tests
|   |── .env                  # Environment variables for server
|   |── Dockerfile            # The docker file for the server
│   ├── package.json          # Backend dependencies
├── prometheus.yml            # Prometheus configuration
├── docker-compose.yml        # Docker Compose configuration
└── README.md                 # Documentation

```

* * * * *

## **Dependency Attribution**

### **Frontend**

- **React**:  
  A popular JavaScript library for building user interfaces. Used for creating dynamic and responsive frontend components.  
  [React Documentation](https://reactjs.org/)

- **Adobe React Spectrum**:  
  A UI library by Adobe for consistent design systems. Used for building visually appealing and accessible components like buttons, text fields, and progress indicators.  
  [React Spectrum Docs](https://react-spectrum.adobe.com/)

- **Vite**:  
  A fast frontend toolchain optimized for modern web development. It’s used for bundling, hot module replacement (HMR), and efficient builds.  
  [Vite Documentation](https://vitejs.dev/)

---

### **Backend**

- **Express.js**:  
  A minimal and flexible Node.js web application framework. Used to handle HTTP requests and provide APIs for the frontend.  
  [Express Documentation](https://expressjs.com/)

- **Prometheus Client (prom-client)**:  
  A library for exposing application metrics in a format readable by Prometheus. Used for tracking metrics like HTTP requests, response times, and success rates.  
  [Prometheus Node.js Client](https://github.com/siimon/prom-client)

- **Winston**:  
  A versatile and extensible logging library for Node.js. Used for capturing structured logs for debugging and error reporting.  
  [Winston Logger Documentation](https://github.com/winstonjs/winston)

---

### **Testing and Development Tools**

- **Jest**:  
  A delightful JavaScript testing framework used for writing unit and integration tests. Provides an efficient and user-friendly testing experience.  
  [Jest Documentation](https://jestjs.io/)

- **ESLint**:  
  A linter tool for identifying and fixing problems in JavaScript code. Ensures code consistency and quality throughout the project.  
  [ESLint Documentation](https://eslint.org/)

---

### **Containerization**

- **Docker**:  
  A platform for containerizing and running the application in isolated environments. Ensures consistency across development, testing, and production.  
  [Docker Documentation](https://docs.docker.com/)

- **Docker Compose**:  
  A tool for defining and running multi-container Docker applications. Used for orchestrating frontend, backend, and Prometheus services.  
  [Docker Compose Documentation](https://docs.docker.com/compose/)


## **Monitoring and Metrics**

### **Grafana Dashboard**

- Access Grafana at **[http://localhost:3000](http://localhost:3000)**.
- A pre-configured dashboard named **"Roman Numeral Metrics Dashboard"** is available, which provides the following insights:
  - **Total HTTP Requests**: Number of incoming requests to the backend.
  - **Response Latency**: Distribution of response times.
  - **Active Requests**: Currently processed requests.
  - **Conversion Results**: A pie chart showing the ratio of successful and failed conversions.

### **Prometheus Metrics**

- Access raw metrics of the backend at **[http://localhost:8080/metrics](http://localhost:8080/metrics)**.
- Query Prometheus monitoring at **[http://localhost:9090](http://localhost:9090)** for detailed data.


* * * * *

**Tests**
---------

### **Run Tests**

1.  Navigate to the `server` directory:

    ```bash

    cd server

    ```

2.  Run the tests:

    ```bash

    npm test

    ```
### **Test Coverage**

1.  **Unit Tests**:
    -   Test individual services like Roman numeral conversion.
    -   Validate input and range checks.
2.  **Integration Tests**:
    -   Test full API behavior with valid and invalid inputs.
    -   Ensure correct metrics are updated after requests.

* * * * *

**Error Handling**
------------------

1.  **Input Validation**:

    -   Ensures inputs are non-null, numeric, and within the valid range (1 to 3999).
2.  **Centralized Middleware**:

    -   Logs errors and sends appropriate responses (e.g., `400` for invalid inputs, `500` for server errors).

* * * * *

**Logging**
-----------

The application uses **Winston** for structured and customizable logging.

-   **Development**: Logs both `info` and `error` levels.
-   **Production**: Logs only `error` level to avoid clutter.

### **Log Files**

-   **`logs/combined.log`**: Contains all logs in development.
-   **`logs/error.log`**: Stores error logs in both development and production.

### **Suppression in Tests**

Winston logs are suppressed during tests to avoid unnecessary output.