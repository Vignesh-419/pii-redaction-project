🔐 PII Redaction & Safe Output Validator

A cybersecurity-focused middleware system that detects and masks Personally Identifiable Information (PII) such as names, emails, and phone numbers before interacting with AI systems.

🚨 Prevents sensitive data leaks
🔒 Ensures user privacy
🤖 Enables safe AI communication

---

📌 Project Overview

In modern AI applications, users often share sensitive information unknowingly.
This project acts as a security layer between users and AI models, ensuring that confidential data is never exposed.

It detects, redacts, and validates sensitive information in both:

- User inputs
- AI-generated responses

---

⚙️ How It Works

1. User sends input from frontend
2. Backend (FastAPI) receives the request
3. PII Detector scans for sensitive data
4. PII Redactor masks detected information
5. Clean input is sent to LLM
6. Output Validator checks response
7. Safe response is returned to user

---

🏗️ System Architecture

User (Frontend UI)
        ↓
Frontend (HTML, CSS, JS)
        ↓
FastAPI Backend
        ↓
PII Detector
        ↓
PII Redactor
        ↓
LLM Service
        ↓
Output Validator
        ↓
Safe Response to User

🔍 Explanation

- Frontend → Takes user input
- Backend (FastAPI) → Handles API requests
- PII Detector → Identifies sensitive data
- PII Redactor → Masks sensitive information
- LLM Service → Processes safe input
- Output Validator → Ensures no leakage in response

---

🚀 Features

- 🔍 Detects PII (names, emails, phone numbers)
- 🛡️ Masks confidential data
- 🤖 Safe LLM interaction
- ✅ Output validation layer
- ⚡ FastAPI backend
- 🌐 Simple frontend UI

---

🧠 Use Case

Example scenario:

A user enters:

My name is John Doe and my email is john@gmail.com

System converts it to:

My name is [REDACTED] and my email is [REDACTED]

👉 This ensures no sensitive data reaches AI models

---

🧱 Technology Stack

- Backend: Python, FastAPI
- Frontend: HTML, CSS, JavaScript
- Security: Regex-based PII detection
- AI Layer: LLM integration

---

📂 Project Structure

pii-redaction-project/
│── backend/
│   ├── main.py
│   ├── pii_detector.py
│   ├── redactor.py
│   ├── llm_service.py
│
│── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
│── requirements.txt
│── README.md

---

🛠️ Installation

1. Clone Repository

git clone https://github.com/Vignesh-419/pii-redaction-project.git
cd pii-redaction-project

2. Install Dependencies

pip install -r requirements.txt

3. Run Backend

uvicorn backend.main:app --reload

4. Run Frontend

Open:

frontend/index.html

---

🎯 Objectives

- Protect sensitive user data
- Prevent accidental data leaks
- Build secure AI middleware
- Demonstrate cybersecurity concepts

---

📈 Future Improvements

- 🔐 AI-based PII detection (NER models)
- 🌍 Cloud deployment
- 📊 Monitoring & logging
- 🔍 Support more PII types

---