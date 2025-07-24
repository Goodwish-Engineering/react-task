# SETUP.md

## 🛠️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sarvesh-dotcom/react-task.git
   cd YOUR-REPO-NAME
   ```


2. **Install Dependencies**

   Ensure that you have **Node.js (v14 or above)** installed.

   Then run:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. Open your browser and visit: [http://localhost:5173]

---

## 💡 Assumptions

- Blog post data is fetched from [https://jsonplaceholder.typicode.com/posts]
- The blog post list displays each post’s `title` and a short preview of the `body`
- Clicking a post opens a **modal** that shows the full post content
- The app does **not** use React Router; all functionality is handled within a single page
- Basic search/filter is available to quickly find posts by title or content
- Pagination is implemented to navigate through posts efficiently
- Styling is done using Tailwind CSS

---

## ⚠ Known Limitations

- Posts are fetched from a mock API (JSONPlaceholder), so content cannot be modified or saved
- No backend, login system, or user authentication
- Modal state does not persist if the page is refreshed
- Search is basic (e.g., case-insensitive match on title/body), and may not scale well with large datasets
