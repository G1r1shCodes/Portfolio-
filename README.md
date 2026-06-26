# Girish's Portfolio Engine

<p align="left">
  <img src="https://img.shields.io/badge/FRONTEND-REACT-3b82f6?style=for-the-badge&logo=react&logoColor=white" alt="Frontend" />
  <img src="https://img.shields.io/badge/BACKEND-FASTAPI-0f172a?style=for-the-badge&logo=fastapi&logoColor=white" alt="Backend" />
  <img src="https://img.shields.io/badge/ML-PYTORCH-8b5cf6?style=for-the-badge&logo=pytorch&logoColor=white" alt="ML" />
  <img src="https://img.shields.io/badge/STATUS-PROTOTYPE-f59e0b?style=for-the-badge" alt="Status" />
</p>

A professional, full-stack, game-based portfolio built with Next.js, FastAPI, Tailwind CSS, and Phaser.js. Features an interactive WebGL background, a persistent guestbook, and a brutalist design system.

---

## 🚀 Features

- **Component-Driven UI**: Modular architecture using Next.js (App Router) and React.
- **Brutalist Design**: Custom brutalist theme implemented via Tailwind CSS v4.
- **Interactive Pixel Art Game**: Integrated **Phaser.js** for a game-engine-driven interactive experience.
- **Full-Stack Guestbook**: Python **FastAPI** backend with a SQLite database to persistently save visitor messages.

---

## 💻 Local Development Setup

To run this project locally, you will need to start both the frontend and the backend servers.

### 1. Backend (FastAPI)
The backend runs on Python and handles API requests.

```bash
cd backend
# Create a virtual environment
python -m venv venv
# Activate the virtual environment (Windows)
.\venv\Scripts\activate
# Install dependencies
pip install -r requirements.txt
# Start the server
uvicorn main:app --reload
```
*The backend will be available at `http://localhost:8000`.*

### 2. Frontend (Next.js)
Open a new terminal window for the frontend.

```bash
# Install dependencies
npm install
# Start the development server
npm run dev
```
*The frontend will be available at `http://localhost:3000`.*

---

## 🌍 Deployment Guide

To deploy this application to production, follow these steps:

### Step 1: Deploy the Backend (Render / Railway)
Since the backend uses a local SQLite database, deploying to a standard ephemeral server (like Heroku or Render free tier) will cause the database to reset on every restart. 

**Recommended Setup:**
1. Push your `backend` code to GitHub.
2. Sign up for [Render.com](https://render.com) or [Railway.app](https://railway.app).
3. Create a **New Web Service** and connect your GitHub repository.
4. Set the Root Directory to `backend`.
5. Set the Build Command: `pip install -r requirements.txt`
6. Set the Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
7. *(Crucial)* Add a **Persistent Disk / Volume** mounted to `/data` and update your `database.py` to point to `/data/guestbook.db` to ensure messages are saved permanently.
8. Once deployed, copy your backend URL (e.g., `https://portfolio-backend.onrender.com`).

### Step 2: Deploy the Frontend (Vercel)
Vercel is the best platform for Next.js applications.

1. Push your entire repository to GitHub.
2. Sign up for [Vercel](https://vercel.com).
3. Click **Add New -> Project** and import your GitHub repository.
4. Vercel will automatically detect that it is a Next.js project.
5. Expand the **Environment Variables** section and add:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: `https://portfolio-backend.onrender.com` *(Replace with your actual backend URL from Step 1)*
6. Click **Deploy**.

Your full-stack application is now live!
