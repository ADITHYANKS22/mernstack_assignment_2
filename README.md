# Employee Dashboard - React Application

A complete React-based Employee Dashboard application with routing, API integration, and responsive design.

## ✓ Requirements Met

### ✓ Navbar
- Navigation bar with "Home" and "Employee Form" links
- Active link highlighting
- Responsive mobile menu

### ✓ Home Page/Dashboard
- Displays employee list from external API
- API: https://jsonplaceholder.typicode.com/users
- Three view options: **Table, Card, and List**
- Shows fields: **ID, Name, Email**
- Loading and error states

### ✓ Employee Form
- Form fields included:
  - Name (text input)
  - Designation (dropdown select)
  - Location (dropdown select)
  - Salary (number input)
- Form validation (all fields required)
- Success message on submission

### ✓ Routing
- React Router v6 for navigation
- Routes: `/` (Home) and `/employee-form`
- Browser-based routing

### ✓ CSS Library
- **Bootstrap 5** for styling
- Custom CSS with gradient backgrounds
- Responsive design for all devices

### ✓ No Backend Posting
- Form data logged to console only
- No POST requests to backend
- Alert message on successful submission

## Installation & Setup

1. **Extract the ZIP file**
   ```bash
   unzip employee-dashboard-react.zip
   cd employee-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`

## Project Structure

```
employee-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Dashboard.js
│   │   └── EmployeeForm.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Features

- ✓ Three view types: Table, Card, and List
- ✓ Loading states while fetching API data
- ✓ Error handling with retry functionality
- ✓ Form validation (all fields required)
- ✓ Success alerts on form submission
- ✓ Responsive navigation with mobile menu
- ✓ Clean, modern UI with gradient backgrounds
- ✓ Smooth transitions and hover effects
- ✓ Active link highlighting in navbar

## Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM 6.20.0** - Routing
- **Bootstrap 5.3.0** - CSS framework
- **JSONPlaceholder API** - External data source

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Assignment 2 - Employee Dashboard (React Version)**
All requirements completed successfully! ✅
