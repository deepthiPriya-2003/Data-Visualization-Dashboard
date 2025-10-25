from sqlalchemy import Column, Integer, String, Float
from database import Base

class ChartData(Base):
    __tablename__ = "chart_data"

    id = Column(Integer, primary_key=True, index=True)
    label = Column(String, index=True)
    value = Column(Float)
