FROM node:18.12-alpine as builder
WORKDIR /user
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


## this is stage two , where the app actually runs
FROM node:18.12-alpine-alpine
WORKDIR /user
COPY package.json ./
RUN npm install --omit=dev
COPY --from=builder /user/build .
EXPOSE 3001
CMD node /user/server.js