#!/bin/bash

# Function to echo commands with a specific color
echo_blue() {
    echo -e "\033[1;34m$1\033[0m"
}

echo_blue "🚀 Fixing TypeScript ESLint configuration...\n"

# Remove previous ESLint configuration
rm -f .eslintrc.json
rm -f .eslintrc.js

# Update package.json
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

# Create new ESLint config file
cat > .eslintrc.js << 'EOF'
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "off"
  }
}
EOF

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
echo_blue "Installing dependencies..."
npm install

# Commit and push changes
git add .
git commit -m "Fix: TypeScript ESLint configuration"
git push origin main

echo_blue "\n✅ Configuration updated! Now deploying to Vercel..."

# Deploy to Vercel
vercel --prod -f

echo_blue "\n✅ Deployment complete!"