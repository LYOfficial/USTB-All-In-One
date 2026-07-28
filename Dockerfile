# =============================================================================
# USTB-All-In-One Dockerfile
# 北京科技大学开源项目及资料导航站
# Multi-stage build: build the VitePress site, then serve it via Nginx.
# =============================================================================

# ---- Stage 1: Build the static site -----------------------------------------
FROM node:20-alpine AS builder

# Enable Corepack for environments that also use pnpm during maintenance.
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Install dependencies first (better Docker layer cache)
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund

# Copy the rest of the source and build the static site
COPY . .
RUN npm run docs:build

# ---- Stage 2: Serve the static site with Nginx -----------------------------
FROM nginx:1.27-alpine AS runtime

# The counter uses Node's built-in HTTP server and has no third-party runtime
# dependencies. It runs beside Nginx inside the same container.
RUN apk add --no-cache nodejs

# Nginx config tuned for SPA / VitePress static output
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY server/page-view-server.mjs /app/server/page-view-server.mjs
COPY docker/20-start-page-view-server.sh /docker-entrypoint.d/20-start-page-view-server.sh
RUN chmod +x /docker-entrypoint.d/20-start-page-view-server.sh

# Copy the built VitePress output into Nginx's web root
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# Expose the HTTP port
EXPOSE 80

# Persist the counter independently from image rebuilds and container updates.
VOLUME ["/data"]

# Verify both Nginx and the page-view process through the internal API route.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/api/page-view/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
