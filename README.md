# Pharmacy Department Website

## Overview

The Pharmacy Department Website is an educational platform aimed at providing students and staff with essential resources, updates, and tools for the pharmacy department. It is built using React, styled-components, and integrates various features for managing courses, events, and resources efficiently. This platform serves as a one-stop solution for students to access educational content and communicate with faculty and peers.

## Tech Stack

- **Frontend**: React, styled-components, react-router-dom, react-query, react-hot-toast.
- **State Management**: Redux for managing global state and context for handling authentication and user data.
- **Backend**: Supabase for image storage and managing user data.
- **Other Libraries**: `react-query` for data fetching and mutations, `react-hot-toast` for displaying notifications.

## Project Structure

- **`src/`**: The main source code of the application.
  - **`components/`**: Reusable UI components like modals, inputs, and notifications.
  - **`context/`**: React contexts for managing authentication, user data, and global states.
  - **`pages/`**: The different pages of the website like `Dashboard`, `Login`, `SignUp`, etc.
  - **`utils/`**: Utility functions like data formatting and API calls.

## Contributing

We welcome contributions! If you want to help improve the website, please fork the repo, make changes, and submit a pull request. Ensure that your code follows the project's coding conventions and passes all tests before submitting.

## License

MIT License
