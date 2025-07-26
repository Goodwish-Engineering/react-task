# SETUP.md

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as indicated in your terminal).

4. **Build for production**
   ```sh
   npm run build
   ```

5. **Preview the production build**
   ```sh
   npm run preview
   ```

---

## Assumptions
- The project uses [Vite](https://vitejs.dev/) for fast development and build.
- The blog data is fetched from `https://jsonplaceholder.typicode.com/posts` (a public fake API for testing and prototyping).
- No authentication or user management is implemented.
- The app is designed for demonstration and learning purposes.

---

## Known Limitations
- **No backend or persistent storage:** All blog data is read-only and fetched from a public API. You cannot add, edit, or delete posts.
- **No authentication:** Anyone can access the app; there is no login or user system.
- **Limited error handling:** Network errors are displayed, but there is no retry or offline support.
- **Basic pagination:** Pagination is client-side and assumes all posts are loaded at once.
- **Responsive design:** The app is responsive for common device sizes, but may need further tweaks for edge cases or very large/small screens.
- **Accessibility:** Basic accessibility is considered, but the app may not meet all accessibility standards.

---

For any issues or questions, please open an issue or contact the maintainer. 