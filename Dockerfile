FROM node:16 AS bundler

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM haeramkeem/injik-nginx

RUN rm -rf /usr/share/nginx/html/*
COPY --from=bundler /usr/src/app/build /usr/share/nginx/html
