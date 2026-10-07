# Paradise Nursery

Paradise Nursery is a React-based shopping cart web application for an online
plant shop. Customers can browse houseplants organized by category, view
plant details such as thumbnails, names, and prices, add plants to a
shopping cart, and manage cart items — adjusting quantities or removing
items entirely — with the total cost updating dynamically.

## Features

- Landing page with the Paradise Nursery brand and a "Get Started" call to action
- About Us section describing the company
- Product listing page with plants grouped into categories (Air Purifying,
  Aromatic Fragrant, and Low Maintenance plants)
- "Add to Cart" functionality that disables the button once an item is added
  and updates the cart icon count in real time
- A dedicated shopping cart page showing:
  - Each item's thumbnail, name, and unit price
  - Quantity increase/decrease controls
  - Per-item subtotal and overall cart total
  - A delete button to remove an item
  - A checkout button ("Coming Soon") and a "Continue Shopping" link back to
    the product listing

## Tech Stack

- React (Vite)
- Redux Toolkit for cart state management
- React Router for navigation between the landing, product listing, and cart pages

## Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
  App.jsx                  Landing page + route definitions
  App.css                  Landing page styling (background image, hero)
  index.css                Global styles and navbar
  store.js                 Redux store configuration
  components/
    AboutUs.jsx             Company information section
    Navbar.jsx               Shared navigation bar with live cart count
    ProductList.jsx          Plant catalog grouped by category
    ProductList.css
    CartItem.jsx              Shopping cart page
    CartItem.css
    CartSlice.jsx              Redux slice for cart state (add/remove/update)
    productsData.js            Plant catalog data
```
