# MERN Task Tracker - My Development Journey

This project is a full-stack Task Management application built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). Beyond just code, this was an exercise in building a secure and scalable web application.

---

### 🏗️ Design Decisions
While building this, I made specific choices to ensure the app is professional:
* **Modular Architecture:** I separated the code into `controllers`, `routes`, `models`, and `middleware` to keep it clean and maintainable.
* **Security First:** Instead of storing plain passwords, I used **bcryptjs** for hashing. For session management, I chose **JWT** (JSON Web Tokens) over simple cookies for better security across different platforms.
* **State Management:** Used React hooks specifically to ensure the dashboard reflects real-time data changes without unnecessary page reloads.

---

### 🚀 Setup Steps (How to Run Locally)

To get this project running on your machine, follow these steps:

1. **Clone the repository:**
   `git clone https://github.com/ElisettiSanjana/MERN-Task-Tracker-Assignment.git`

2. **Backend Setup:**
   * Go to the root folder: `cd backend`
   * Install dependencies: `npm install`
   * Create a `.env` file and add your `MONGO_URI` and `JWT_SECRET`.
   * Start server: `npm start`

3. **Frontend Setup:**
   * Go to frontend folder: `cd frontend`
   * Install dependencies: `npm install`
   * Start React app: `npm start`

---

### 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login & JWT generation |
| GET | `/api/tasks` | Fetch all tasks for logged-in user |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update task status/details |
| DELETE | `/api/tasks/:id` | Remove a task |

---

### 🧠 Challenges I Overcame
* **The CORS Wall:** Solved cross-origin communication issues by configuring middleware.
* **User Persistence:** Implemented LocalStorage with JWT to keep users logged in after a refresh.

---





### 📺 Project Walkthrough Video



https://github.com/user-attachments/assets/8330304c-db85-4c3b-96a7-b322d0f2563e




Render Link : https://mern-task-tracker-assignment.onrender.com ✅

