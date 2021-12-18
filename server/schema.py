from typing import List, Optional

from pydantic import BaseModel



class FavoriteBase(BaseModel):
    title:str

class FavoriteCreate(FavoriteBase):
    pass

class Favorite(FavoriteBase):
    id: int
    owner_id:int

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    email:str

class UserCreate(UserBase):
    password:str

class User(UserBase):
    id:int
    is_active: bool
    favorites:List[Favorite] = []

    class Config:
        orm_mode =True