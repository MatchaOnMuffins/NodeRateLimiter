# Node js
FROM node:14-alpine
# if PORT is not set, default to 8080
ENV PORT 8080
EXPOSE $PORT
COPY . .
RUN npm i
ENTRYPOINT ["npm", "start"]
