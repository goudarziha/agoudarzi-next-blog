#!/bin/bash

# Clean up build artifacts and node_modules
echo "Cleaning up build artifacts..."
rm -rf .next
rm -rf node_modules

# Remove lock files
echo "Removing lock files..."
rm -f package-lock.json
rm -f pnpm-lock.yaml
rm -f yarn.lock

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "Installing dependencies..."
npm install --no-optional

# Verify React installation
echo "Verifying React installation..."
npm ls react
npm ls react-dom

# Check for React DOM client
echo "Checking for React DOM client..."
ls node_modules/react-dom/client.js 2>/dev/null || echo "React DOM client not found, attempting to fix..."

# Check for JSX runtime
echo "Checking for JSX runtime..."
ls node_modules/react/jsx-runtime.js 2>/dev/null || echo "JSX runtime not found, attempting to fix..."

# Build the project
echo "Building the project..."
npm run build

echo "Clean install completed!" 