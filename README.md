# 🛒 React E-Commerce Website (Learning Project)

## 📌 Project Overview

This project is a fully functional **React-based E-Commerce Website** built during my early learning phase of React.

The primary goal of this project was to strengthen my understanding of:

- Component-based architecture
- React state management
- Client-side routing
- API integration
- Project structuring best practices

The application simulates a basic online store experience, including product listings, search functionality, and dynamic page navigation.

---

<img width="1161" height="438" alt="Fun-website1" src="https://github.com/user-attachments/assets/b16a9983-6124-4612-99bd-55731b81f09b" />
<img width="989" height="733" alt="Fun-website2" src="https://github.com/user-attachments/assets/76f31b00-b243-482f-b19c-fbea2c4bd720" />



## 🛠️ Tech Stack

- **React.js**
- **React Router DOM** – Client-side routing
- **JavaScript (ES6+)**
- **CSS**
- **Dummy API** – For fetching product data

---
## Major Functions

* **Component-Based UI:** Utilizes reusable functional and class components to manage different sections of the interface.
* **State Management:** Implements React `useState` and `useEffect` hooks (or standard Class state) to handle dynamic data updates and side effects.
* **Responsive Design:** Features a layout that adjusts to different screen sizes for a consistent user experience.
* **Routing (if applicable):** Navigation between different views without page reloads using React Router.
* **API Integration:** Fetches and displays data from external or local JSON sources.

## Dependencies

The project relies on the following major packages:

* **React:** The core library for building the user interface.
* **React-DOM:** Provides DOM-specific methods for the browser.
* **Scripts:** Uses `react-scripts` for the build pipeline.
* **React-Router-DOM** for navigation.

Check the `package.json` file for the exact versions of all dependencies.


## ✨ Features Implemented

- ✅ Product listing page
- ✅ Dynamic routing using `react-router-dom`
- ✅ Product data fetched from a Dummy API
- ✅ Product images and detailed view page
- ✅ Search functionality to filter products
- ✅ Reusable components
- ✅ Clean and modular project setup

---

## 🚧 Incomplete Features

The following features were planned but not implemented:

- ❌ Contact page
- ❌ User authentication (Login / Signup)
- ❌ Cart & checkout flow improvements

---

## 📬 Feedback

I’m always open to feedback and suggestions for improvement.  
Feel free to explore the project and share your thoughts!

---

## Build and Deploy Instructions

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or higher recommended)
* npm or yarn

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/vel-sk98/first-old-react-project.git
cd first-old-react-project

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm start

```


The app will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build, run:

```bash
npm run build

```

The output will be generated in the `build/` folder, which is ready to be deployed to hosting services like Netlify, Vercel, or GitHub Pages.

### Deployment (GitHub Pages)

If you wish to deploy to GitHub Pages:

1. Add `"homepage": "https://vel-sk98.github.io/first-old-react-project"` to your `package.json`.
2. Run:
```bash
npm run deploy

```

