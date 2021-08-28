# pull official base image
FROM node:13.12.0

# set working directory
WORKDIR /constructor_ui

# add `/app/node_modules/.bin` to $PATH
ENV PATH /constructor_ui/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]