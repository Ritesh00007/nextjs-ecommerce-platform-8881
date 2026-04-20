#!/bin/bash
set -e

echo "[Vercel Deploy] Starting deployment of nextjs-ecommerce-platform"
echo "[Vercel Deploy] Repo: https://github.com/Ritesh00007/nextjs-ecommerce-platform"

# Install Vercel CLI if not present
if ! command -v vercel &> /dev/null; then
  echo "[Vercel Deploy] Installing Vercel CLI..."
  npm install -g vercel
fi

# Build
echo "[Vercel Deploy] Building project..."
npm run build

# Deploy
echo "[Vercel Deploy] Deploying to Vercel..."
if [ -n "$VERCEL_TOKEN" ]; then
  DEPLOY_URL=$(vercel --prod --yes --token "$VERCEL_TOKEN" 2>&1 | tail -1)
else
  DEPLOY_URL=$(vercel --prod --yes 2>&1 | tail -1)
fi

echo "[Vercel Deploy] ✅ Deployment complete!"
echo "[Vercel Deploy] 🚀 Live URL: $DEPLOY_URL"
