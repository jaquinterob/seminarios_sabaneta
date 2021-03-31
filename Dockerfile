
FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
ARG configuration=production
RUN npm run ng build -- --prod --configuration=$configuration

FROM nginx:alpine
COPY --from=node /app/dist/seminariosSabaneta /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf