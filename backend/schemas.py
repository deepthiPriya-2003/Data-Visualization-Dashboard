from pydantic import BaseModel

class ChartDataBase(BaseModel):
    label: str
    value: float

class ChartDataCreate(ChartDataBase):
    pass

class ChartDataOut(ChartDataBase):
    id: int

    class Config:
        orm_mode = True
