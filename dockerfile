FROM node:14

WORKDIR /usr/app
COPY package*.json ./
COPY ./src/index.js ./
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 3000
CMD ["node", "index.js"]