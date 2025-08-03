#!/bin/bash

# Clean up build artifacts and node_modules
echo "Cleaning up build artifacts..."
rm -rf .next
rm -rf node_modules

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

echo "Clean install completed!" 