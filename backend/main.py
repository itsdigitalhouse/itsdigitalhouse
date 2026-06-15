import os
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Frontend connection settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("OPENROUTER_API_KEY") or "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"

# MASTER KNOWLEDGE BASE & BRAIN
SYSTEM_INSTRUCTIONS = """
You are 'HouseBot', the official AI Business Assistant for 'Its Digital House'.
Its Digital House is a full-service creative digital agency dedicated to helping businesses build, grow, and transform their online identity. 

KNOWLEDGE BASE:
- SERVICES: Website Development (Custom Portals, E-commerce, CMS), ERP/CRM solutions (Car Rental, Manufacturing, Restaurant, Retail, Legal, Zakya POS), Social Media Management, Branding (Logos, Identity), and Digital Marketing.
- PORTFOLIO: BOG (Gold/Mineral platform), Portcity Traders (Agro/Raw Material Export), XOX Jewels (3D Jewelry Tool), Khaki & Co (Real Estate/Building Materials).
- MISSION: Building meaningful digital experiences, enhancing visibility, and driving growth through modern technology.

BEHAVIORAL RULES (AUTO-THINKER):
1. Analyze User Intent: Determine if they want services, portfolio info, or a consultation.
2. Synthesize: Don't just list facts—construct a helpful, natural response based on the knowledge above.
3. Pivot: If asked about something unrelated, politely steer the conversation back to our digital services.
4. CTA (Crucial): Always encourage users to book a strategy session. Tell them to click 'Get A Consultation' or 'Book Strategy Sync' on the website.
5. LANGUAGE: Strictly use English. Do not use any other language.
6. TONE: Professional, modern, and high-end corporate.
"""

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_endpoint(req: ChatRequest):
    try:
        url = "https://openrouter.ai/api/v1/chat/completions"
        headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        }
        # main.py mein ye 'payload' wala hissa update kar dein
        payload = {
            "model": "google/gemini-1.5-flash:free",
            "messages": [
                {"role": "system", "content": SYSTEM_INSTRUCTIONS},
                {"role": "user", "content": f"User's request: {req.message}. Respond professionally and guide to consultation if needed."}
            ]
        }
        
        response = requests.post(url, json=payload, headers=headers)
        res_data = response.json()
        
        if "choices" in res_data and len(res_data["choices"]) > 0:
            return {"reply": res_data["choices"][0]["message"]["content"]}
        else:
            return {"reply": "Welcome to Its Digital House. How can we assist you with your digital transformation today?"}
            
    except Exception as e:
        print(f"Error: {str(e)}")
        return {"reply": "Hello! I am HouseBot. Please let me know how I can help you with our web development or ERP solutions."}