# Restaurant Search App

This is a restaurant search project that provides an interactive experience using Algolia for instant search. Users can search for restaurants, filter by cuisine type, and add or remove restaurants from the Algolia index directly from the interface.

## 🚀 Live Demo

[Live Demo](https://your-live-demo-link.com)

## ✨ Features

- Instant search as you type, powered by **Algolia**.
- Search results.
- Ability to delete and add restaurants to the Algolia index from the frontend.
- Search state management directly in the URL.
- Responsive and attractive design using **Tailwind CSS**.
- Modal for adding new restaurants with validation.

## 📦 Requirements

This project uses **pnpm** as the package manager. Make sure you have **pnpm** installed:

```bash
npm install -g pnpm
```

### Environment Variables

You need to create a `.env.local` file in the root of the project with the following variables:

```bash
NEXT_PUBLIC_ALGOLIA_APP_ID=your_algolia_app_id
NEXT_PUBLIC_ALGOLIA_API_KEY=your_algolia_api_key
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=restaurants_index
```

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/restaurant-search-app.git
   cd restaurant-search-app
   ```

2. Install project dependencies using **pnpm**:

   ```bash
   pnpm install
   ```

3. Load dummy data into the Algolia index by running the script:

   ```bash
   pnpm algolia:load-data
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

The project will be available at `http://localhost:3000`.

## 🛠 Technologies Used

- **Next.js**: React framework for web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Algolia**: Search engine to provide an advanced search experience.
- **React InstantSearch**: Algolia's library for React, simplifying the search integration.
