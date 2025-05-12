#INSTRUCTION args
FROM node:alpine 
#set WORKDIR working directory
WORKDIR /app
#COPY package.json file 
COPY package*.json ./
#INSTALL node_modules(node dependencies)
RUN npm i 
#COPY the rest of application 
COPY . .
#EXPOSE PORT to run 
EXPOSE 5000
#COMMAND to run app
CMD ["npm", "run", "dev"]