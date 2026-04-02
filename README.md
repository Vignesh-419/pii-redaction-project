🔐 PII Redaction & Safe Output Validator

---

📌 Project Overview

This project is a cybersecurity-based middleware system that detects and masks Personally Identifiable Information (PII) such as names, emails, and phone numbers from both user inputs and AI-generated responses.

It ensures secure and safe interaction with AI systems by preventing the exposure of sensitive data.

---

🏗️ System Architecture

        User (Frontend UI)
                │
                ▼
        ┌───────────────┐
        │   Frontend    │
        │ HTML, CSS, JS │
        └───────┬───────┘
                │ HTTP Request
                ▼
        ┌───────────────┐
        │   FastAPI     │
        │   Backend     │
        └───────┬───────┘
                │
        ┌───────▼────────┐
        │  PII Detector  │
        └───────┬────────┘
                │
        ┌───────▼────────┐
        │  PII Redactor  │
        └───────┬────────┘
                │
        ┌───────▼────────┐
        │   LLM Service  │
        └───────┬────────┘
                │
        ┌───────▼────────┐
        │ Output Validator│
        └───────┬────────┘
                │
                ▼
         Safe Response to User

---

📂 Project Structure

pii-redaction-project
│
├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── pii_detector.py
│   │   ├── redactor.py
│   │   ├── llm_service.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitattributes
└── README.md

---

🎯 Objectives

- Detect sensitive information (PII)
- Mask confidential data before sending to AI
- Validate AI-generated responses
- Ensure secure communication

---

🧠 Features

- 🔍 PII Detection (Name, Email, Phone Number)
- 🛡️ Automatic Data Masking
- 🔄 Input & Output Validation
- ⚡ FastAPI Backend
- 🌐 Interactive Frontend Interface

---

⚙️ Technologies Used

- Python
- FastAPI
- Uvicorn
- Presidio (PII Detection & Anonymization)
- HTML, CSS, JavaScript

---

🚀 Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/Vignesh-419/pii-redaction-project.git
cd pii-redaction-project/backend

---

2️⃣ Create Virtual Environment

python -m venv venv

---

3️⃣ Activate Environment

Windows:

venv\Scripts\activate

Mac/Linux:

source venv/bin/activate

---

4️⃣ Install Dependencies

pip install -r requirements.txt

---

▶️ Run Backend Server

uvicorn app.main:app --reload

Open in browser:
👉 http://127.0.0.1:8000/docs

---

🌐 Run Frontend

Open this file in your browser:

frontend/index.html

---

🧪 Example

Input:

My name is Vignesh and email is vignesh@gmail.com

Output:

My name is [NAME] and email is [EMAIL]

---

🔄 How It Works

1. User enters input in frontend
2. Frontend sends request to backend API
3. PII Detector identifies sensitive data
4. Redactor masks sensitive information
5. Safe prompt sent to LLM
6. Output Validator checks response
7. Safe output returned to user

---

🔐 Use Cases

- AI Chatbots
- Banking Applications
- Healthcare Systems
- Secure AI Assistants

---

📌 Future Improvements

- Aadhaar & Credit Card Detection
- Integration with real LLM APIs
- Advanced UI enhancements
- Logging & monitoring system

---

⭐ Conclusion

This project enhances AI security by protecting sensitive user data using detection, masking, and validation techniques, making AI systems safer and more reliable.

---
