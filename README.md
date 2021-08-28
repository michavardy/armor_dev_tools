# build docker compose
- docker-compose up -d --build
# check that it works
- localhost:3001 - react redux app
- localhost:80 - api
# run development envirnment
docker run  -it -v dev_env:/dev_env armor_dev_tools_development