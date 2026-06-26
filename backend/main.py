from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
import models
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

# Configure CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For development. In production, change to frontend URL.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class MessageCreate(BaseModel):
    name: str
    email: str | None = None
    message: str

class MessageResponse(BaseModel):
    id: int
    name: str
    message: str
    timestamp: str

    class Config:
        from_attributes = True

@app.get("/api/messages", response_model=list[MessageResponse])
def read_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    messages = db.query(models.Message).order_by(models.Message.timestamp.desc()).offset(skip).limit(limit).all()
    # Format timestamp for response
    return [
        {
            "id": msg.id,
            "name": msg.name,
            "message": msg.message,
            "timestamp": msg.timestamp.isoformat()
        } for msg in messages
    ]

@app.post("/api/messages", response_model=MessageResponse)
def create_message(message: MessageCreate, db: Session = Depends(get_db)):
    db_message = models.Message(name=message.name, email=message.email, message=message.message)
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    
    return {
        "id": db_message.id,
        "name": db_message.name,
        "message": db_message.message,
        "timestamp": db_message.timestamp.isoformat()
    }
