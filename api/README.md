# to build image 
docker build -t myimage .
# to run container
docker run -d --name mycontainer -p 80:80 myimage
# pass query
localhost:80/items/5?q=somequery