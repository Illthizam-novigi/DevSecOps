# Stage 1: Build
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Stage 2: Runtime (lighter image)
FROM node:20-alpine

WORKDIR /app

# copy only built files + package.json
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

CMD ["node", "dist/index.js"]