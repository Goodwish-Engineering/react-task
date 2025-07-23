# Setup Instructions

## Project Overview

This is a responsive mini blog app built with React that fetches posts from JSONPlaceholder. It features pagination and shows full post details on a separate page.

## Features

- Fetches and displays a list of blog posts.
- Pagination implemented to load posts in pages.
- Clicking a post navigates to a separate page showing full details.
- Responsive layout for desktop and mobile.
- Loading indicator shown while fetching data.

## Prerequisites

- Ensure you have **Node.js** (v14 or higher) and **npm** installed.
- Download Node.js from [https://nodejs.org/]

## Installation

1. Clone the repository (if you haven’t already):
   git clone https://github.com/PRITIKA-GIRI/react-task.git
   cd react-task
2. Install dependencies :
    npm install
3. Start the development Server
    npm run dev
    
4. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173).

## Assumptions

- The blog posts data is fetched from JSONPlaceholder.

- Post details are shown on a separate page to provide better navigation and bookmarking.

- Pagination is implemented to load posts in pages instead of all at once.

## Known Limitations
- Styling is functional but minimal, focusing on responsiveness and usability.
- No user authentication or post creation/editing.