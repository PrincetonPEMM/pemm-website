#!/bin/bash

# Create .env file and write content
echo "REACT_APP_API=http://localhost:3000/api/" >> .env
echo "WEBSITE=http://localhost:3000" >> .env

# Install dependencies
npm install

# Run development environment
npm run dev