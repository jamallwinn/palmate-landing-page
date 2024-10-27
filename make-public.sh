#!/bin/bash

# Function to echo commands with a specific color
echo_blue() {
    echo -e "\033[1;34m$1\033[0m"
}

echo_blue "🚀 Making site public and setting up domain...\n"

# First, let's add a proper domain configuration to vercel.json
cat > vercel.json << 'EOF'
{
  "version": 2,
  "public": true,
  "cleanUrls": true,
  "trailingSlash": false,
  "github": {
    "enabled": true,
    "silent": true
  }
}
EOF

echo_blue "Created vercel.json configuration"

# Commit and push changes
git add .
git commit -m "Config: Make site public and add domain configuration"
git push origin main

# Deploy with new configuration
echo_blue "\nDeploying with new configuration..."
vercel --prod

echo_blue "\n✅ Site is now public!"
echo_blue "\nNext steps for custom domain:"
echo_blue "1. Go to your Vercel dashboard: https://vercel.com/dashboard"
echo_blue "2. Select the palmate-landing-page project"
echo_blue "3. Click 'Settings' -> 'Domains'"
echo_blue "4. Add your domain (e.g., palmatellc.com)"
echo_blue "5. Follow Vercel's instructions to configure your DNS settings"