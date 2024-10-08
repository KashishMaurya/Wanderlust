
# Wanderlust

Wanderlust is a clone of Airbnb, built using the MERN stack (MongoDB, Express.js, React, Node.js) and following the MVC (Model-View-Controller) architecture. The application allows users to explore and manage listings of homes, log in and out, add new listings, review properties, and more.

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Home Listings**: View a curated list of available homes, similar to Airbnb.
- **Add Listings**: Logged-in users can add new property listings.
- **Add Reviews**: Logged-in users can review properties they've visited.
- **View Listings**: Explore available home listings with detailed information.

## Tech Stack

- **Frontend**: React.js, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database setup
- Render account for deployment

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies for both client and server:**

   npm install
   

3. **Set up environment variables:**

   Create a `.env` file in the directory and add your MongoDB URI and any other necessary environment variables:

   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application locally:**

   ```bash
   node app.js
   ```

5. **Deploy to Render:**

   Follow the [Render documentation](https://render.com/docs) to deploy both the frontend and backend.

## Contributing

Feel free to fork this project, open issues, and submit pull requests. Contributions are welcome!

---

Feel free to customize this further to fit your project's specific needs!
