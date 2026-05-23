#!/bin/sh
set -e

echo "==> Pulling latest changes..."
git pull --rebase

echo "==> Stopping containers..."
docker-compose down

echo "==> Building and starting containers..."
docker-compose up -d --build

echo "==> Done. App running on port 3222."
