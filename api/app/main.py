from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from pydantic import create_model
import os
import json

# if running on wsl
if os.path.exists('/mnt/c/Users/micha/Desktop/armor_dev_tools/api/app/ballistic_test_dummy_data.json'):
    with open('/mnt/c/Users/micha/Desktop/armor_dev_tools/api/app/ballistic_test_dummy_data.json','r') as d:
        dummy = json.load(d)
if os.path.exists('/app/ballistic_test_dummy_data.json'):
    with open('/app/ballistic_test_dummy_data.json','r') as d:
        dummy = json.load(d)
else:
    dummy=False

app = FastAPI()

origins = [
    "http://127.0.0.1:3001/",
    "http://localhost:3001/",
    "http://127.0.0.1:3000/",
    "http://localhost:3000/",
    "http://127.0.0.1:80/",
    "http://localhost:80/"
]

app.add_middleware(CORSMiddleware, allow_origins=["*"],allow_credentials=True,allow_methods=["*"], allow_headers=["*"])

def dict_model(name:str,dict_def:dict):
    """
        currently this function only supports nested dicts and lists of dicts, (i think)
        given model m1 >> pydantic.main.model
        you can instantiate a new model using m1() or m1(**new_dict)
    """
    fields = {}
    for field_name,value in dict_def.items():
        if isinstance(value,(int,bool,str,float,tuple)):
            fields[field_name]=value
        elif isinstance(value,list):
            list_model_schema = dict_model(f'{name}_{field_name}',value[0])
            fields[field_name] = [list_model_schema(**i) for i in value]
        elif isinstance(value,dict):
            fields[field_name]=(dict_model(f'{name}_{field_name}',value)())
        else:
            raise ValueError(f"Field {field_name}:{value} has invalid syntax")
    return create_model(name,**fields)

#model_from_json = dict_model('dummy_model',dummy)()

@app.get("/")
def read_root():
    return ({"Hello": "my_world_3"})

@app.get("/dummy")
def get_dummy():
    return (dummy)


