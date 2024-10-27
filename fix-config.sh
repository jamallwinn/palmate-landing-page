#!/bin/bash

# Function to echo commands with a specific color
echo_blue() {
    echo -e "\033[1;34m$1\033[0m"
}

# Function to create/update file
create_file() {
    local file_path=$1
    local content=$2
    mkdir -p "$(dirname "$file_path")"
    echo "$content" > "$file_path"
    echo_blue "Updated: $file_path"
}

echo_blue "🚀 Fixing Next.js configuration...\n"

# Remove TypeScript config file if it exists
rm -f next.config.ts

# Create JavaScript config file
create_file "next.config.js" 'module.exports = {
  reactStrictMode: true,
  swcMinify: true,
}
'

# Update package.json to ensure proper dependencies
create_file "package.json" '{
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
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.3",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}'

# Update tailwind.config.js
create_file "tailwind.config.js" 'module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite"
      }
    },
  },
  plugins: [],
}'

# Update postcss.config.js
create_file "postcss.config.js" 'module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}'

# Commit and push changes
git add .
git commit -m "Fix: Next.js configuration and build setup"
git push origin main

echo_blue "\n✅ Configuration updated! Now try deploying again:"
echo_blue "1. Run: vercel --prod"