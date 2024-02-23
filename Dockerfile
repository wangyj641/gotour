# build stage
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY db.json ./
COPY tsconfig.json ./
COPY public public/
COPY src src/
RUN npm run build

# 2nd stage: setup a lightweight nginx server
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
