# Deployment Instructions

## Fixing React Version Conflicts and JSX Runtime Issues

The build error is caused by multiple React versions being used and missing JSX runtime modules. Follow these steps to resolve:

### 1. Clean Installation
Run the clean install script:
```bash
chmod +x clean-install.sh
./clean-install.sh
```

### 2. Manual Clean Installation
If the script doesn't work, run these commands manually:

```bash
# Remove build artifacts and dependencies
rm -rf .next
rm -rf node_modules
rm -f package-lock.json
rm -f pnpm-lock.yaml

# Clear npm cache
npm cache clean --force

# Install dependencies
npm install

# Build the project
npm run build
```

### 3. Netlify Deployment Settings

In your Netlify dashboard, ensure these settings:

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18.x or higher

**Environment Variables:**
- `NODE_VERSION`: `18.20.8` (or your preferred version)

### 4. Key Changes Made

1. **Updated package.json:**
   - Changed Next.js from `canary` to stable `15.4.2`
   - Updated React to `18.2.0` (stable version)
   - Updated React DOM to `18.2.0` (stable version)
   - Added `overrides` to force React version consistency

2. **Added .npmrc:**
   - `legacy-peer-deps=true`
   - `strict-peer-dependencies=false`
   - `auto-install-peers=true`
   - `resolution-mode=highest`

3. **Updated next.config.js:**
   - Webpack aliases to ensure single React instance
   - Added JSX runtime aliases (`react/jsx-runtime`, `react/jsx-dev-runtime`)
   - MDX experimental features

4. **Updated tsconfig.json:**
   - Changed `moduleResolution` to `bundler` for better module resolution

5. **Removed conflicting lock files:**
   - Deleted `package-lock.json`
   - Deleted `pnpm-lock.yaml`

### 5. Troubleshooting

If you still encounter issues:

1. **Check for duplicate React installations:**
   ```bash
   npm ls react
   npm ls react-dom
   ```

2. **Force resolution in package.json:**
   ```json
   {
     "overrides": {
       "react": "18.2.0",
       "react-dom": "18.2.0"
     }
   }
   ```

3. **Use npm instead of pnpm/yarn:**
   - Ensure you're using npm for consistency

### 6. Local Testing

Before deploying, test locally:
```bash
npm run build
npm start
```

This should resolve both the "A React Element from an older version of React was rendered" error and the "Module not found: Can't resolve 'react/jsx-runtime'" error. 