FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

EXPOSE 3222

ENV PORT=3222
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]
