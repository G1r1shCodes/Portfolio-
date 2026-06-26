from sqlalchemy import Column, Integer, String, DateTime
from database import Base
import datetime

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, nullable=True)
    message = Column(String)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
