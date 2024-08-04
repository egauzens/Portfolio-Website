#!/bin/bash
# heroku-build.sh

# Build the frontend
cd resume
npm install
npm run build

# Move the build artifacts to the backend directory
mv build ../backend/public

# Return to the root directory
cd ..

# Now, deploy the backend
cd backend
