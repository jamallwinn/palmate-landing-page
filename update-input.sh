#!/bin/bash

# Function to echo commands with a specific color
echo_blue() {
    echo -e "\033[1;34m$1\033[0m"
}

# Create input component
create_input() {
    mkdir -p src/components/ui
    cat > src/components/ui/input.tsx << 'EOF'
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
EOF
    echo_blue "Created: src/components/ui/input.tsx"
}

echo_blue "🚀 Updating Input Component\n"

# Install dependencies if not already installed
npm install lucide-react

# Create the input component
create_input

echo_blue "\n✅ Input component updated! Ready to continue with the page update."

# Continue with page.tsx update...