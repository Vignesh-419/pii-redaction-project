🔐 PII Redaction & Safe Output Validator

📌 Project Overview

This project is a cybersecurity-based middleware system designed to detect and mask Personally Identifiable Information (PII) from user inputs and AI-generated responses.

It ensures that sensitive data such as names, emails, and phone numbers are protected before interacting with Large Language Models (LLMs).

---

🎯 Objectives

- Detect sensitive user data (PII)
- Mask confidential information automatically
- Ensure safe communication with AI models
- Validate and clean LLM responses before returning to users

---

🧠 Features

- 🔍 PII Detection (Name, Email, Phone Number)
- 🛡️ Automatic Data Masking
- 🔄 Input & Output Validation
- ⚡ FastAPI Backend
- 🔐 Privacy Protection Layer

---

🏗️ Project Structure

pii-redaction-project
│
├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── pii_detector.py
│   │   ├── redactor.py
│   │   ├── llm_service.py
│   │   ├── validator.py
│   │   └── __init__.py
│
├── frontend
└── README.md

---

⚙️ Technologies Used

- Python
- FastAPI
- Uvicorn
- Presidio (PII Detection & Anonymization)
- Pydantic
- Requests

---

🚀 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/pii-redaction-project.git
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

pip install fastapi uvicorn presidio-analyzer presidio-anonymizer pydantic requests

---

▶️ Run the Project

uvicorn app.main:app --reload

Open in browser:

http://127.0.0.1:8000/docs

---

🧪 Example

Input:

My name is Vignesh and email is vignesh@gmail.com

Output:

My name is <NAME> and email is <EMAIL>

---

🔄 How It Works

1. User sends input request
2. PII Detector scans for sensitive data
3. Redactor masks detected PII
4. Safe prompt sent to LLM
5. Output Validator re-checks response
6. Safe response returned to user

---

🔐 Use Cases

- AI Chatbots
- Banking Applications
- Healthcare Systems
- Customer Support Automation

---

📌 Future Improvements

- Aadhaar & Credit Card Detection
- Integration with real LLM APIs
- Advanced logging and monitoring
- Frontend UI enhancements

---

⭐ Conclusion

This project enhances AI safety by preventing exposure of sensitive user information and ensuring secure communication between users and AI systems.