FROM node:18 AS ui-build
WORKDIR /usr/src/app
COPY F123/ ./F123/
RUN cd F123 && npm install && npm run build

FROM node:18 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/F123/public ./F123/public
COPY F123-api/package*.json ./F123-api/
RUN cd F123-api && npm install
COPY api/server/src/index.js ./api/

EXPOSE 8080

CMD ["node", "./api/index.js"]
