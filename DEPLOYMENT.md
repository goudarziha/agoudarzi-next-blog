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
   - Changed Next.js from `canary` to stable `13.4.19` (most compatible)
   - Updated React to `17.0.2` (stable version)
   - Updated React DOM to `17.0.2` (stable version)
   - Updated TypeScript types to match React 17
   - Added `overrides` and `resolutions` to force React version consistency

2. **Updated .npmrc:**
   - `auto-install-peers=true`
   - `resolution-mode=highest`
   - `save-exact=true`
   - Removed legacy peer deps (not needed for React 17)

3. **Simplified next.config.js:**
   - Removed webpack configuration to let Next.js handle module resolution
   - Removed experimental features that were causing conflicts

4. **Updated tsconfig.json:**
   - Changed `moduleResolution` back to `node` for better compatibility
   - Changed JSX setting back to `preserve` for better compatibility

5. **Updated netlify.toml:**
   - Combined install and build commands
   - Node version specification
   - Removed legacy peer deps flag

6. **Removed OG route:**
   - Deleted `app/og/route.tsx` (not compatible with Next.js 13.5.6)
   - Updated blog metadata to not reference OG images

7. **Removed conflicting lock files:**
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
       "react": "17.0.2",
       "react-dom": "17.0.2"
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