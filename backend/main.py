from fastapi import FastAPI
from database import Base, engine
import models
from routes import chart_routes

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Data Visualization Dashboard API")

# Include routes
app.include_router(chart_routes.router)

@app.get("/")
def root():
    return {"message": "Welcome to Data Visualization Dashboard API"}
