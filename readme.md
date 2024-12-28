# Micro-Frontend App

This project is a micro-frontend architecture with the following apps:

1. **Server**: Handles authentication and API (NestJS).  
2. **Home**: Main app containing the landing page and shared components.  
3. **Cart**: Manages cart functionality.  
4. **PDP**: Handles Product Details Page (PDP) features.

---

## Prerequisites
- Node.js and npm installed on your machine.
- Ports available:
  - `3000` (Home)
  - `3001` (PDP)
  - `3002` (Cart)
  - `3003` (Server)

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd micro-fe-into

### Install dependencies in all apps
```
cd home && npm install
cd ../cart && npm install
cd ../pdp && npm install
cd ../server && npm install
```


## Starting apps
```
npm run start:all
```

### To start specific apps only
```
npm run start home cart pdp
```

ps: The server app starts automatically when you start any app.