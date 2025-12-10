# Frontend build
FROM node:20 AS builder

WORKDIR /app
COPY ../frontend-paternity/package.json ../frontend/package-lock.json ./
RUN npm install
COPY ../frontend-paternity .
RUN npm run build

# Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
