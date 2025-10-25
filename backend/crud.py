from sqlalchemy.orm import Session
import models, schemas

def get_chart_data(db: Session):
    return db.query(models.ChartData).all()

def create_chart_data(db: Session, data: schemas.ChartDataCreate):
    new_data = models.ChartData(name=data.name, sales=data.sales, revenue=data.revenue)
    db.add(new_data)
    db.commit()
    db.refresh(new_data)
    return new_data
