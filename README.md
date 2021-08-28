# Armor Dev Tools
## goal
- to build a web application in order to collect and search data from in house lab.
## sections
- constructor UI
- api backend
- mongo db
- mysql *on secure network

### Steps
1. test that the containers can communicate
1. complete react/redux constructor UI

# build docker compose
- docker-compose up -d --build
# check that it works
- localhost:3001 - react redux app
- localhost:80 - api
# run development envirnment
docker run  -it -v dev_env:/dev_env armor_dev_tools_development


### below are some useful commands

# git
## to add a new file to tracking list
- git add . 
- git add <file name>
## to see status of files
- git status
## make a local commit 
- git commit -m "message"
## check git log for history
- git log

# github
## add a new repository
- gh repo create
## add a remote connection between local git and github repository
- git remote add <remote_name> git@github.com:michavardy/<repo_name>.git
- usually the remote_name is called origin
## view all remote connections
- git remote -v
## push local git to remote repository
- git push <remote_name> <branch_name>
- usually the remote_name is called origin
- usually the branch_name is called main
- git push origin HEAD:main

# dockers
## write Dockerfile
## build dockerfile
- cd into directory with dockerfile
- docker build -t <image_name> .
- -t will give image the tag image name
## view images
- docker images
## remove image
- docker image rm <image_id>
## run container
- docker run <image_name>
- you can port forword using -p 80:80
- detached mode for running backround servers -d
- -i interactive mode  /bin/bash command for opening shell
- docker run -it <image_name> /bin/bash
