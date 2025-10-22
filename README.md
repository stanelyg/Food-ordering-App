# React 19 Learning Showcase 🚀

A practical learning project built with **React 19**, demonstrating core frontend engineering concepts including **data fetching**, **configurable components**, **context management**, **reducer functions**, **form validation**, and **custom hooks**.

---

## 🎯 Project Overview

This project was created to strengthen my understanding of modern React 19 capabilities and architectural patterns.  
It integrates real-world use cases such as API data fetching, state management with context + reducers, reusable form handling, and component configuration via props and custom hooks.

---

## 🧩 Key Learning Areas

### 1. Fetching Data from a Backend
- Implemented `fetch()` for RESTful API communication.  
- Used **async/await** for clean asynchronous logic.  
- Implemented **loading**, **error**, and **success** states.  
- Demonstrated dynamic rendering of fetched data.

### 2. Creation of Configurable Components
- Built reusable UI components (e.g., `Button`,`Modal`, `InputField`) with props for customization.  
- Showcased component composition and controlled inputs.

### 3. Context and Reducer Functions
- Utilized the **Context API** for global state management.  
- Combined **useReducer** with Context for predictable state updates.  
- Ensured separation of concerns by abstracting reducer logic into dedicated files.

### 4. Form Submission and Validation
- Created dynamic forms using **controlled components**.    
- Handled submission with proper error and success feedback.

### 5. Custom Hooks
- Developed custom hooks (e.g., `useHttp`) for reusability and cleaner logic separation.  
- Showcased how custom hooks encapsulate stateful logic and improve code maintainability.

---

## 🏗️ Tech Stack

| Category | Tools / Libraries |
|-----------|------------------|
| Frontend Framework | React 19 |
| Styling | Tailwind CSS / CSS Modules |
| State Management | Context API + useReducer |
| Data Fetching | Axios / Fetch API |
| Form Handling | React Hook Form / Custom Validation |
| Build Tool | Vite / Create React App |
| Version Control | Git + GitHub |

---

## 📂 Project Structure

📦src
 ┣ 📂assets
 ┃ ┗ 📜logo.jpg
 ┣ 📂components
 ┃ ┣ 📂UI
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Error.jsx
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┗ 📜Modal.jsx
 ┃ ┣ 📜Cart.jsx
 ┃ ┣ 📜CartItem.jsx
 ┃ ┣ 📜Checkout.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜MealItem.jsx
 ┃ ┗ 📜Meals.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useHttp.js
 ┣ 📂store
 ┃ ┣ 📜CartContext.jsx
 ┃ ┗ 📜UserProgressContext.jsx
 ┣ 📂util
 ┃ ┗ 📜formatting.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx

---

## ⚙️ Setup and Installation

```bash
# Clone the repository
git clone https://github.com/stanelyg/Food-ordering-App.git


# Navigate into the project
cd Food-ordering-App

# Install dependencies
npm install

# Run the development server
npm run dev

cd backend
npm install
npm run start
