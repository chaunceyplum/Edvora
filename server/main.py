


from typing import List

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import crud, model, schema, database




database.Base.metadata.create_all(bind=database.engine)

app =FastAPI()
origins = [
    "http://localhost:3000",
    "https://localhost:3000",
    "http://localhost:8080",
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ROUTES
@app.get("/")
def index():
    return {"hello im ":"chauncey"}

@app.post("/users/", response_model=schema.User)
def create_user(user: schema.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.getUserByEmail(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.createUser(db=db, user=user)


@app.get("/users/", response_model=List[schema.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.getUsers(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schema.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.getUser(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/items/", response_model=schema.Favorite)
def create_item_for_user(
    user_id: int, item: schema.FavoriteCreate, db: Session = Depends(get_db)
):
    return crud.createUserFavorite(db=db, item=item, user_id=user_id)


@app.get("/items/", response_model=List[schema.Favorite])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.getFavorite(db, skip=skip, limit=limit)
    return items





