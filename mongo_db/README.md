# reference
https://faun.pub/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3

# credentials
- database name: mongo_db
- database USERNAME: root
- database PASSWORD: example
- database port: 27017

# Login to your container by using container names
docker exec -it mongo_db bash


## Login to MongoDB with created User & Database by using
- mongo -u <your username> -p <your password> --authenticationDatabase <your database name>
## OR 
- mongo -u <your username> --authenticationDatabase <your database name>

# connect to database
mongodb://root:example@localhost:27017/mongo_db