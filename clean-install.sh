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
npm install

# Verify React installation
echo "Verifying React installation..."
npm ls react
npm ls react-dom

# Build the project
echo "Building the project..."
npm run build

echo "Clean install completed!" 