const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require('./routes/authRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config();

const app = express();
app.use(express.json());

//Swagger Configuration
const options = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'API for stock data',
          version: '1.0.0'
      },
      servers: [{
          url: 'http://localhost:3000/'
      }]
  },
  apis: ['./routes/authRoutes.js', './routes/ticketRoutes.js']
};

const swaggerSpec = swaggerJSDoc(options);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/auth', authRoutes); // Authentication routes
app.use('/tickets', ticketRoutes); // Ticket management routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
