#!/bin/bash

# This script sets up the test project by linking to the astro-phantom-forms package

echo "🚀 Setting up astro-phantom-forms test project"

# Step 1: Build the main package
echo "📦 Building astro-phantom-forms package..."
cd ..
npm run build

# Step 2: Set up npm link
echo "🔗 Setting up npm link..."
npm link

# Step 3: Link to this project
echo "🔗 Linking to test project..."
cd test-project
npm link astro-phantom-forms

# Step 4: Install dependencies if needed
echo "📚 Installing dependencies..."
npm install

echo "✅ Setup complete! Run 'npm run dev' to start the server"
echo "🌐 Then visit http://localhost:3000 in your browser"