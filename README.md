# 🏠 Wanderlust - Vacation Rental Platform
Live demo : https://wanderlust-k06z.onrender.com

A full-stack web application for listing and booking vacation rentals, inspired by Airbnb. Built with Node.js, Express, MongoDB, and integrated with Cloudinary for image storage and Mapbox for geolocation services.

![Wanderlust Dashboard](/Wanderlust/images/Screenshot%202026-02-03%20170005.png)
![Listing](/Wanderlust/images/Screenshot%202026-02-03%20170056.png)
![Rating](/Wanderlust/images/Screenshot%202026-02-03%20170117.png)

## ✨ Features

### 🔐 User Authentication & Authorization
- Secure user registration and login using Passport.js
- Password hashing and session management
- Protected routes with middleware authentication
- User-specific listing ownership and permissions

### 🏡 Listing Management
- **Create Listings**: Add new vacation rental properties with details
- **Edit Listings**: Update property information (owner-only access)
- **Delete Listings**: Remove listings from the platform (owner-only access)
- **View Listings**: Browse all available properties with detailed information
- **Image Upload**: Cloudinary integration for optimized image storage and delivery

### 📍 Interactive Maps
- **Mapbox Integration**: Visual location representation for each listing
- **Geocoding**: Automatic coordinate generation from location addresses
- **Interactive Map Display**: Click and explore property locations

### ⭐ Review System
- **Add Reviews**: Authenticated users can leave ratings and comments
- **Star Ratings**: 1-5 star rating system for each property
- **Review Management**: Users can delete their own reviews
- **Author Attribution**: Display review author information

### 🔍 Search & Filter
- Search properties by destination
- Filter listings based on various criteria
- Real-time search functionality

### 📱 Responsive Design
- Mobile-first approach using Bootstrap 5
- Seamless experience across all devices
- Modern and intuitive UI/UX

### 🛡️ Security Features
- Input validation using Joi schemas
- XSS protection
- MongoDB injection prevention
- Secure session management with MongoDB store
- HTTP-only cookies for enhanced security

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Express-session** - Session management
- **Connect-flash** - Flash messages
- **Multer** - File upload handling
- **Joi** - Data validation

### Frontend
- **EJS** - Templating engine
- **Bootstrap 5** - CSS framework
- **JavaScript** - Client-side scripting

### Third-Party Services
- **Cloudinary** - Cloud-based image storage and optimization
- **Mapbox** - Maps and geocoding services
- **MongoDB Atlas** - Cloud database hosting

### Development Tools
- **Method-override** - HTTP verb support
- **EJS-Mate** - Layout support for EJS
- **dotenv** - Environment variable management

## 📂 Project Structure

```
wanderlust/
├── controllers/              # Route logic and business logic
│   ├── listing.js           # Listing CRUD operations
│   ├── review.js            # Review operations
│   └── user.js              # User authentication logic
├── models/                   # Mongoose schemas
│   ├── listing.js           # Listing model
│   ├── review.js            # Review model
│   └── user.js              # User model
├── routes/                   # Express routes
│   ├── listing.js           # Listing routes
│   ├── review.js            # Review routes
│   └── user.js              # User routes
├── views/                    # EJS templates
│   ├── layouts/             # Layout templates
│   ├── listings/            # Listing views
│   ├── users/               # User authentication views
│   └── includes/            # Reusable components (navbar, footer, flash)
├── public/                   # Static assets
│   ├── css/                 # Stylesheets
│   └── js/                  # Client-side JavaScript
├── utils/                    # Utility functions
│   ├── ExpressError.js      # Custom error class
│   └── wrapAsync.js         # Async error handler
├── init/                     # Database initialization
│   ├── data.js              # Sample data
│   └── index.js             # Seed script
├── middleware.js             # Custom middleware functions
├── schema.js                 # Joi validation schemas
├── cloudConfig.js            # Cloudinary configuration
├── app.js                    # Main application file
├── .env                      # Environment variables
├── .gitignore               # Git ignore file
└── package.json             # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_key
MAP_TOKEN=your_mapbox_access_token
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

4. **Initialize the database (optional)**
```bash
node init/index.js
```

5. **Start the application**
```bash
node app.js
```

6. **Access the application**
```
http://localhost:3000
```

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Secret key for session encryption |
| `MAP_TOKEN` | Mapbox API access token |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

## 📸 Screenshots

### Home Page
Browse all available vacation rentals with search functionality.

### Listing Details
View comprehensive property information including location, price, reviews, and interactive maps.

### Create New Listing
Easy-to-use form for property owners to list their rentals.

### User Authentication
Secure login and registration system.

## 🔒 Security Measures

- **Authentication**: Passport.js with local strategy
- **Session Security**: Secure session cookies with MongoDB store
- **Data Validation**: Server-side validation using Joi schemas
- **Authorization**: Route-level protection and ownership verification
- **Password Security**: Hashing and salting with passport-local-mongoose
- **XSS Protection**: Input sanitization and output encoding
- **Error Handling**: Centralized error handling with custom error classes

## 🎯 Key Features Implementation

### MVC Architecture
The application follows the Model-View-Controller pattern for clean code organization and separation of concerns.

### RESTful API Design
- `GET /listings` - View all listings
- `GET /listings/new` - Render create form
- `POST /listings/new` - Create new listing
- `GET /listings/:id` - View single listing
- `GET /listings/:id/edit` - Render edit form
- `PUT /listings/:id/edit` - Update listing
- `DELETE /listings/:id` - Delete listing

### Middleware Chain
- Authentication middleware for protected routes
- Validation middleware using Joi schemas
- Authorization middleware for ownership verification
- Error handling middleware for graceful error responses

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License 

## 👤 Author

**Kashish**

- GitHub: [KashishMaurya](https://github.com/KashishMaurya)
- LinkedIn: [KashishMaurya](hhttps://www.linkedin.com/in/kashish-maurya-24b0712b6/)

## 🙏 Acknowledgments

- Bootstrap for the responsive UI framework
- Cloudinary for image hosting and optimization
- Mapbox for mapping services
- MongoDB Atlas for cloud database hosting
- The open-source community for various packages and tools

## 📧 Contact

For any queries or suggestions, feel free to reach out:
- Email: kashishmaurya.1803@gmail.com
- LinkedIn: [KashishMaurya](hhttps://www.linkedin.com/in/kashish-maurya-24b0712b6/)

## 🚀 Future Enhancements

- [ ] Payment gateway integration
- [ ] Booking system with calendar
- [ ] Advanced search filters (price range, amenities)
- [ ] User profiles with saved listings
- [ ] Email notifications
- [ ] Social media integration
- [ ] Real-time chat between hosts and guests
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

---

⭐ If you found this project helpful, please give it a star!

Feel free to fork this project, open issues, and submit pull requests. Contributions are welcome!
Feel free to customize this further to fit your project's specific needs!


Made with ❤️ by Kashish
