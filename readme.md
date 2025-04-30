Folder Structure  

├── app.js                 # Main app configuration
├── bin/
│   └── www                # Server entry point
├── config/
│   └── db.js              # Database configuration
│   └── env.js             # Environment variable loader
├── controllers/
│   └── userController.js  # Logic for routes (business logic)
├── models/
│   └── User.js            # Mongoose/ORM models
├── routes/
│   └── userRoutes.js      # Route definitions
├── middlewares/
│   └── authMiddleware.js  # Custom middleware functions
├── services/
│   └── userService.js     # Service logic (e.g., business rules, emails)
├── utils/
│   └── logger.js          # Helper functions
├── validators/
│   └── userValidator.js   # Input validation logic (e.g., Joi or express-validator)
├── public/                # Static files (CSS, images)
├── views/                 # Templating engine views (EJS, Pug, etc.)
├── .env                   # Environment variables
├── .gitignore
├── package.json



installation : 
back-end packages =>
npm install express-validator
npm install nodemon
npm install dotenv 
npm install bcryptjs
npm install cors