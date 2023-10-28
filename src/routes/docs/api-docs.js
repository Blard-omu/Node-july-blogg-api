import { createUser, loginUser, loginUserBody, createUserBody, deleteUser, getUser, getUsers, updateUser, updateUserBody } from './users.js';
import { createBlog, createOrUpdateBlogBody, deleteBlog, getBlogs, getBlog, updateBlogBody, updateBlog } from './blogs.js';

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'BLARD REST API - Documentation',
    description: 'Node blogg api built with express. ',
    termsOfService: 'https://mysite.com/terms',
    contact: {
      name: 'Blard Omu',
      email: 'blardomu@gmail.com',
      url: 'https://github.com/blard-omu',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'https://node-july-api.onrender.com/',
      description: 'Local Server',
    },
    {
      url: 'https://node-july-api.onrender.com/',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Users',
    },
    {
      name: 'Blogs',
    },
    
  ],
  paths: {
    '/register': {
      post: createUser,
    },
    '/login': {
      post: loginUser,
    },
    '/users': {
      get: getUsers
    },
    '/users/_id': {
      delete: deleteUser,
      get: getUser,
      patch: updateUser,
    },
    'blogs/create': {
      post: createBlog,
    },
    'blogs/all': {
      get: getBlogs,
    },
    'blog/_id': {
      delete: deleteBlog,
      get: getBlog,
      put: updateBlog,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      createUserBody,
      loginUserBody,
      updateUserBody,
      createOrUpdateBlogBody,
    },
  },
};

export { apiDocumentation };