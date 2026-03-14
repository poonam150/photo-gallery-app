# React Photo Gallery

A responsive photo gallery application built using **React, Vite, and Tailwind CSS**.
The app fetches images from the Picsum API and allows users to search photos by author and mark favorites.

## Live Demo

https://photo-gallery-app-tawny.vercel.app/

## GitHub Repository

https://github.com/poonam150/photo-gallery-app

## Features

* Fetch photos from the **Picsum API**
* Responsive **photo grid layout**
* **Search photos by author**
* **Favorite photos** with heart toggle
* Favorites persist using **localStorage**
* Performance optimization using **React hooks**

## Tech Stack

* React (Functional Components)
* Vite
* Tailwind CSS
* useReducer
* useMemo
* useCallback
* Custom Hooks

## Project Structure

```
src
 ├ components
 │   └ Gallery.jsx
 ├ hooks
 │   └ useFetchPhotos.js
 ├ reducer
 │   └ favoritesReducer.js
 ├ App.jsx
 └ main.jsx
```

## How to Run Locally

Clone the repository

```
git clone https://github.com/poonam150/photo-gallery-app.git
```

Install dependencies

```
npm install
```

Run development server

```
npm run dev
```

## API Used

https://picsum.photos/v2/list?limit=30

## Author

Poonam


