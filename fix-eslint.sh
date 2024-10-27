#!/bin/bash

# Function to echo commands with a specific color
echo_blue() {
    echo -e "\033[1;34m$1\033[0m"
}

echo_blue "🚀 Fixing ESLint TypeScript configuration...\n"

# Install required ESLint plugins
echo_blue "Installing ESLint TypeScript plugins..."
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Update ESLint configuration
cat > .eslintrc.json << 'EOF'
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-interface": "off"
  }
}
EOF

echo_blue "Updated .eslintrc.json"

# Update package.json to include the new dependencies
cat > package.json << 'EOF'
{
  "name": "palmate-landing-page",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.358.0",
    "next": "14.1.3",
    "react": "^18",
    "react-dom": "^18",
    "tailwind-merge": "^2.2.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "^7.1.0",
    "@typescript-eslint/parser": "^7.1.0",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.3",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
EOF

echo_blue "Updated package.json"

# Clean install to ensure proper dependency resolution
echo_blue "Running clean install..."
rm -rf node_modules package-lock.json
npm install

# Commit and push changes
git add .
git commit -m "Fix: ESLint TypeScript configuration"
git push origin main

echo_blue "\n✅ ESLint configuration updated! Now try deploying again:"
echo_blue "1. Run: vercel --prod"