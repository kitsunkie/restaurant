FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY dist/restaurant /usr/share/nginx/html
