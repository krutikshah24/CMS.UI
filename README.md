# Contact Management Application

This application uses a .NET Core 8 API for the backend and an Angular 18 application for the frontend. The backend data is stored in a JSON file, and the application includes server-side pagination to handle large datasets efficiently.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

This repository contains
---

## Table of Contents

1. [Repositories](#repositories)
2. [Setup Instructions](#setup-instructions)
   - [Angular Frontend](#angular-frontend)
3. [How to Run the Application](#how-to-run-the-application)
4. [Application Structure](#design-decisions-and-application-structure)

---

## Repositories

This application has separate repositories for the back end and front end.

1. **Backend (API)**: [https://github.com/krutikshah24/CMS.API]
2. **Frontend (UI)**: [https://github.com/krutikshah24/CMS.UI]

Clone each repository separately and follow the setup instructions below for each project.

---

## Setup Instructions

To set up this project, you must configure both the backend and frontend environments.

### Angular Frontend 

1. **Install Node.js and Angular CLI**:
   - Download and install [Node.js](https://nodejs.org/) (LTS version recommended).
   - Install the Angular CLI globally by running:
     ```bash
     npm install -g @angular/cli
     ```
   - Confirm the installation by running:
     ```bash
     ng version
     ```

2. **Navigate to the Angular Project Directory**:
   - Move into the `CMS.UI` directory where the Angular code is located.

3. **Install Dependencies**:
   - Install the required npm packages by running:
     ```bash
     npm install
     ```
---

## How to Run the Application

### Run the Angular Frontend

1. **Start the Angular Application**:
   - Run the Angular frontend with the following command:
     ```bash
     ng serve
     ```
   - The application should now be accessible at `http://localhost:4200`. The Angular application will use the backend API to perform CRUD operations.

---

## Application Structure

#### Frontend (Angular)

- **Components**:
   - `UserListComponent`: Displays a list of users with pagination controls for easy navigation.
   - `UserFormComponent`: Handles user creation and update operations, with form validation for required fields and email format.
- **Services**:
   - `UserService`: An Angular service that uses `HttpClient` to send HTTP requests to the backend API, providing methods for CRUD operations.
- **Models**:
   - A TypeScript interface defines the structure of the `User` model in the frontend, ensuring consistency with the backend data schema.
- **Pagination**:
   - The frontend requests data in pages from the backend, enabling server-side pagination for optimized data handling.

---

