# 🧠 Personalized Pomodoro Timer

A sleek, full-featured Pomodoro Timer app that **personalizes session durations** based on your cognitive focus — powered by React, Tailwind CSS (via ShadCN UI), and a FastAPI + Python backend for intelligent deep learning–based predictions.

![Light Mode Screenshot](Pomodoro-main/images/Screenshot%202025-07-15%20154318.png)

---

## 🚀 Features

- ⏱️ **Adaptive Pomodoro Timer**  
  Dynamically adjusts Focus / Short Break / Long Break durations based on your recent focus patterns

- 📊 **Session History & Analytics**  
  Visualize focused vs. unfocused sessions, productivity trends, and personalized interval suggestions

- 🎛️ **Custom Settings**  
  Auto-start behavior, theme toggle, notification sounds, and more

- 👤 **User Authentication**  
  Secure login/signup via JWT tokens

- 🌗 **Light & Dark Modes**  
  Responsive design with automatic or manual theme switching

- 🧠 **EEG-Based Focus Detection**  
  Deep learning model trained on brainwave data to infer attention states and recommend optimal work/break durations

---

## 🧠 EEG-Based Focus Prediction (Python + Deep Learning)

This project integrates a dedicated Python backend that leverages deep learning to analyze EEG signals and infer the user's cognitive focus level in each session.

Key highlights:

- 🧠 **EEG Signal Preprocessing**  
  Cleaning, windowing, and normalization of multichannel EEG data

- 🤖 **Deep Learning Architecture**  
  Custom models built using **TensorFlow and Keras**, designed to learn temporal and spatial EEG patterns for classifying focus vs. non-focus states

- ⏱️ **Dynamic Interval Suggestion**  
  Focus predictions are used to adapt Pomodoro intervals, maximizing personalized productivity

- 🚀 **FastAPI Integration**  
  The model is served through a FastAPI backend that handles:
  - EEG session input and focus prediction  
  - Pomodoro interval recommendation based on historical trends  
  - Session logging and basic analytics support

---

## 📷 Screenshots

### 🔒 Authentication

| Login Page | Signup Page |
|------------|-------------|
| ![Login](Pomodoro-main/images/Screenshot%202025-07-15%20154405.png) | ![Signup](Pomodoro-main/images/Screenshot%202025-07-15%20154416.png) |

### 🧭 Timer Modes

| Focus Mode | Short Break | Long Break |
|------------|-------------|------------|
| ![Focus](Pomodoro-main/images/Screenshot%202025-07-15%20154239.png) | ![Short Break](Pomodoro-main/images/Screenshot%202025-07-15%20154247.png) | ![Long Break](Pomodoro-main/images/Screenshot%202025-07-15%20154256.png) |

### ⚙️ Settings + Analytics

| Settings Page | Analytics View |
|---------------|----------------|
| ![Settings](Pomodoro-main/images/Screenshot%202025-07-15%20154352.png) | ![Analytics](Pomodoro-main/images/Screenshot%202025-07-15%20154224.png) |

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- **React + Next.js**
- **Tailwind CSS** (via ShadCN UI)
- **Lucide Icons**
- **JWT Authentication**

### 🔧 Backend (App)
- **FastAPI** (Session logic, auth, analytics)
- **MongoDB** (Data storage for sessions and user info)

### 🧠 EEG Prediction Engine
- **Python**
- **TensorFlow + Keras** for deep learning
- **NumPy, Pandas, Matplotlib** for data handling
- **FastAPI + Pydantic** for model serving and validation

---

## 📦 Setup Instructions

### Frontend

```bash
git clone https://github.com/YOUR-USERNAME/Pomodoro.git
cd Pomodoro
pnpm install
pnpm dev


cd backend
pnpm install
pnpm dev

cd eeg-api
python -m venv venv

# Windows
.\venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload
