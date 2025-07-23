# Setup Instructions

## Prerequisites
- Make sure you have **Node.js** (version 14 or higher) and **npm** installed on your machine.
- (Optional) A code editor like **VS Code**.

---

## Installation

1. **Clone the repository**:

   ``bash
   git clone https://github.com/Kranti803/react-task

2. Install dependencies:

``bash
npm install

3. Running the Project

``bash
npm run dev

This will start the React app (using Vite) and open it in your default browser at http://localhost:3000 (or a similar port).

4. Build for Production
To create a production build, run:
npm run build

## Assumptions & Limitations
The app fetches blog data from https://jsonplaceholder.typicode.com/posts.
The API does not support advanced search or filtering, so filtering is done on the frontend.
Routing is handled using react-router-dom.
No backend server is required; the app is fully frontend.
