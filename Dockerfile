FROM node:14-alpine as builder
WORKDIR /yeti
COPY . .
RUN npm install && npm run build

FROM nginx:mainline-alpine
COPY --from=builder /yeti/dist /usr/share/nginx/html/yeti
CMD ["nginx", "-g", "daemon off;"]