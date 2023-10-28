// const swaggerJsdoc = require('swagger-jsdoc');
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blard Node API Documentation",
      version: "1.0.0",
      description: "Documentation for Blard Node API",
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: [
    "./src/routes/authRoutes.js",
    "./src/routes/userRoutes.js",
    "./src/routes/blogRoutes.js",
    // Guys you may add more routes here
  ],
  
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec };
