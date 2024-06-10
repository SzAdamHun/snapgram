# snapgram
A full stack social media website allowing users to share images with the world.

<img width="720" alt="login" src="https://github.com/SzAdamHun/snapgram/assets/44400951/ca15d06e-baf7-47c9-ba11-cc4a1afa264d">


## Features

- **User Authentication**: Secure user authentication and management using Appwrite.
- **Post Creation**: Users can upload posts with images and titles, as well as tags.
- **Home Page**: Displays a feed of posts where users can like and save their favorite posts.
- **Explore Page**: Discover new and trending posts from other users.
- **Responsive Design**: Fully responsive design implemented using TailwindCSS.

<img width="720" alt="homePage" src="https://github.com/SzAdamHun/snapgram/assets/44400951/335ebf82-6611-4326-8f3c-d5c867543860">


## Technologies Used

- **Front-end**:
  - [TypeScript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
  
- **Back-end**:
  - [Appwrite](https://appwrite.io/): A secure end-to-end backend server for web, mobile, and flutter developers that abstracts and simplifies common and complex backend tasks.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:

- [Node.js](https://nodejs.org/en/) 
- [npm](https://www.npmjs.com/)
- [Appwrite](https://appwrite.io/docs/installation) server setup

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/SzAdamHun/snapgram.git
   cd snapgram

2. **Install dependencies**:
   ```sh
   npm install
3. **Set up Appwrite**:
- Follow the Appwrite installation guide to set up your Appwrite server.
- Create a new project in the Appwrite console.
- Create necessary collections for posts, users, save and configure rules for each collection.

4. **Configure environment variables**:
- Create a .env.local file in the root of your project and add the following environment variables:
```
VITE_APPWRITE_URL = 'APPWRITE CLOUD URL'
VITE_APPWRITE_PROJECT_ID = 'YOUR PROJECT ID'
VITE_APPWRITE_STORAGE_ID = 'YOUR STORAGE ID'
VITE_APPWRITE_DATABASE_ID = 'YOUR DATABASE ID'
VITE_APPWRITE_SAVES_COLLECTION_ID = 'YOUR SAVES COLLECTION ID'
VITE_APPWRITE_POST_COLLECTION_ID = 'YOUR POSTS COLLECTION ID'
VITE_APPWRITE_USER_COLLECTION_ID = 'YOUR USER COLLECTION ID'
```

### Running the application

1. **Start the development server**:
  ```sh
  npm run dev
  ```
2. Open your browser and navigate to `http://localhost:5173/` to see the application in action.
