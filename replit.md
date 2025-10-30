# Community Connect

## Overview
Community Connect is a React Native Expo application for KZN Issue Reporting & Updates. This app is built with Expo and can run on web, iOS, and Android platforms.

## Project Architecture
- **Framework**: React Native with Expo (v54)
- **UI Library**: React Native Paper (v4.9.2)
- **Platform**: Web-first deployment (can be extended to mobile)
- **Port**: Runs on port 5000 for web preview

## Tech Stack
- React 19.1.0
- React Native 0.81.5
- Expo ~54.0.20
- React Native Paper 4.9.2
- @expo/vector-icons

## Project Structure
```
/
├── App.js              # Main application component
├── index.js            # Entry point
├── app.json            # Expo configuration
├── metro.config.js     # Metro bundler configuration
├── package.json        # Dependencies and scripts
├── assets/             # Images and static assets
└── components/         # Reusable components
```

## Development Setup
The project is configured to run on Replit with:
- Port 5000 for web server
- Metro bundler for React Native web
- CORS enabled for Replit's iframe preview

## Running the App
The workflow runs: `npm run web` which starts the Expo web server on port 5000.

## Recent Changes
- 2025-10-30: Initial project import and Replit setup
  - Configured Expo to run on port 5000
  - Set up Metro config with CORS support
  - Created workflow for web preview
