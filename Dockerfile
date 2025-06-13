FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install -g @nestjs/cli && npm install
COPY . .
RUN npm run build
EXPOSE 3003
CMD ["npm", "run", "start:prod"]
