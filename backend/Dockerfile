FROM node

WORKDIR ./app

COPY package.json .

RUN npm install 

RUN npm install --save dotenv

RUN npm install --save bcrypt

COPY . ./app

EXPOSE 80

CMD ["npm", "start"]