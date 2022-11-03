FROM node:16.16-alpine as builder
WORKDIR /user
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


## this is stage two , where the app actually runs
FROM node:16.16.0-alpine
WORKDIR /user
COPY package.json ./
RUN npm install --omit=dev
COPY --from=builder /user/build .
EXPOSE 3001
CMD node /user/server.js