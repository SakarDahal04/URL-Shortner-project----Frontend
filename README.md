# ⚛️ React Frontend for React-Django Authentication App

This is the frontend part of a full-stack authentication system built using **React** and connected to a **Django REST Framework** backend. It features secure token-based authentication, email verification, password management, and user profile updates — all designed to provide a real-world understanding of authentication flows. For working functinality of URL-shortner application is implemented in here.

## 📌 Features

- ✅ **User Registration** with email verification.
- 🔐 **JWT Authentication** for secure login and token management.
- 🔁 **Password Reset** via email and secure password change while logged in.
- 👤 **Profile Management** for viewing and updating user data.
- 🔄 **Persistent Login State** using localStorage and JWT refresh tokens.
- 🔒 Route protection for authenticated users.

## 📁 Project Structure

        src/
        ├── components/ # Reusable UI components
        ├── pages/      # Route-based pages (Login, Register, Profile, etc.)
        ├── services/   # API calls
        ├── App.js      # Root component with routes
        ├── index.js    # Entry point
        ├── context/    # Auth logic


## 🚀 Getting Started

### Prerequisites

    - Node.js (v14 or later)
    - npm or yarn

### Installation

1. **Clone the Repository**

        git clone https://github.com/your-username/frontend-repo.git
        cd frontend-repo


2. **Install Dependencies**

        npm install
        or
        yarn install

3. **Set Environment Variables**

    Create a .env file in the root directory:

        VITE_API_URL="http://127.0.0.1:8000" # The base URL for the backend

4. **Run the Development Server**

        npm run dev

    Frontend will be served at: http://localhost:5173

### 🔗 **Backend API**

- Make sure the Django backend is running at the URL specified in .env (default: http://127.0.0.1:8000). 
- For backend setup, refer to the repository in same Github account:

### 📦 **Backend repo:**  
    
- Backend Repo: [Django Backend](https://github.com/SakarDahal04/URL-Shortner-project)

### **Contact**

- Feel free to contact with me via [LinkedIn](https://www.linkedin.com/in/sakar-dahal-30a560277/)

This project is a work in progress, and I'm continuously learning and improving. Contributions and feedback are welcome!