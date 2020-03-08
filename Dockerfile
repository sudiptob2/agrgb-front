# base image
FROM node:12.16.0-alpine

ADD . /app/
WORKDIR /app/
RUN npm install --silent
EXPOSE 3000

# start app
CMD ["npm", "start"]