from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import models, schemas
from database import get_db

router = APIRouter(prefix="/charts", tags=["Charts"])

@router.post("/", response_model=schemas.ChartDataOut)
def create_chart_data(data: schemas.ChartDataCreate, db: Session = Depends(get_db)):
    new_data = models.ChartData(label=data.label, value=data.value)
    db.add(new_data)
    db.commit()
    db.refresh(new_data)
    return new_data

@router.get("/", response_model=list[schemas.ChartDataOut])
def get_all_chart_data(db: Session = Depends(get_db)):
    return db.query(models.ChartData).all()
