# React Task – Setup Guide

This guide walks you through setting up and running the project locally.

---

## 📦 Step 1: Clone the Repository

```bash
git clone https://github.com/bibashBasnet/react-task.git
cd react-task


📁 Step 2: Project Structure & Install Dependencies
react-task/
├── Backend/
└── mini-blog-app/

npm install            # At root (react-task)
cd Backend && npm install
cd ../mini-blog-app && npm install
cd ..                  # Go back to root (react-task)

⚙️ Step 3: Configure Environment Variables
cd Backend
PORT=5000
DATABASE=your_database_url_here

🚀 Step 4: Run the Application
npm run dev
