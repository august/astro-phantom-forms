#!/bin/bash

# This script cleans up the npm links

echo "🧹 Cleaning up astro-phantom-forms test setup"

# Step 1: Unlink from this project
echo "🔗 Unlinking from test project..."
npm unlink astro-phantom-forms

# Step 2: Unlink from global
echo "🔗 Unlinking from global npm..."
cd ..
npm unlink

echo "✅ Cleanup complete!"