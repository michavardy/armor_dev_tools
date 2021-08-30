# build locally 
python3 -m uvicorn main:app --reload
gunicorn <app_name>:app -w 4 -k uvicorn.workers.UvicornWorker
# to build image 
docker build -t myimage .
# to run container
docker run -d --name mycontainer -p 80:80 myimage
# pass query
localhost:80/items/5?q=somequery