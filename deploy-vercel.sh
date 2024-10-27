#!/bin/bash

# Function to echo commands with a specific color
echo_blue() {
    echo -e "\033[1;34m$1\033[0m"
}

# Function to execute command with a pause
execute_with_pause() {
    echo_blue "\n➡️ Executing: $1"
    eval $1
    sleep 2
}

echo_blue "🚀 Preparing for Vercel Deployment\n"

# First, let's commit all changes
execute_with_pause "git add ."
execute_with_pause "git commit -m 'Update: Ready for Vercel deployment'"
execute_with_pause "git push origin main"

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo_blue "Installing Vercel CLI..."
    execute_with_pause "npm install -g vercel"
fi

# Create vercel.json configuration
cat > vercel.json << 'EOF'
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ]
}
EOF

echo_blue "Created vercel.json configuration"

# Deploy to Vercel
echo_blue "\nDeploying to Vercel..."
echo_blue "You'll be prompted to login if this is your first time using Vercel CLI"
execute_with_pause "vercel --prod"

echo_blue "\n✅ Deployment should now be complete!"
echo_blue "\nNext steps:"
echo_blue "1. Visit your Vercel dashboard to verify the deployment"
echo_blue "2. Configure your custom domain if needed"
echo_blue "3. Set up any environment variables if required"