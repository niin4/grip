FROM node:jessie

EXPOSE 8000

RUN apt-get update && apt-get install -y libpng-dev && \
    rm -rf /var/cache/apk/*

RUN npm install --global pngquant-bin gatsby; mkdir -p /site
WORKDIR /site
VOLUME /site

COPY . /
RUN chmod +x /entry.sh
ENTRYPOINT ["/entry.sh"]