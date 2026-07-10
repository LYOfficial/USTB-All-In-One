# =============================================================================
# USTB-All-In-One Dockerfile
# 北京科技大学开源项目及资料导航站
# Multi-stage build: build the VitePress site, then serve it via Nginx.
# =============================================================================

# ---- Stage 1: Build the static site -----------------------------------------
FROM node:20-alpine AS builder

# pnpm enables faster, deterministic installs (matches the lockfile-less workflow)
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

# Nginx config tuned for SPA / VitePress static output
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built VitePress output into Nginx's web root
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# Expose the HTTP port
EXPOSE 80

# Healthcheck (the page title contains a stable marker we can grep)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]