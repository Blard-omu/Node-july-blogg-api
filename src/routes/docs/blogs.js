const BlogResponseWithRole = {
  _id: {
    type: 'string',
    example: '60564fcb544047cdc3844818',
  },
  title: {
    type: 'string',
    example: 'John Snow',
  },
  content: {
    type: 'string',
    example: 'john.snow@email.com',
  },
  author: {
    type: 'string',
    example: 'John Snow',
  },
  image_url: {
    type: 'string',
    example: 'https://res.cloudinary.com/djkrhjgjd/image/upload/v1698454838/bjjssmoclttxluiyothk.jpg',
  },
  createdAt: {
    type: 'string',
    example: '2021-03-20T19:40:59.495Z',
  },
  updatedAt: {
    type: 'string',
    example: '2021-03-20T21:23:10.879Z',
  },
};

const internalServerError = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Internal Server Error',
          },
        },
      },
    },
  },
};

const BlogNotFound = {
  description: 'Blog not found',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Blog with id: "71675fcb655047cdc4955929" not found',
          },
        },
      },
    },
  },
};

const invalidBlogData = {
  description: 'Invalid Data provided',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'The fields field1, field2 and field3 are required',
          },
        },
      },
    },
  },
};

const security = [
  {
    bearerAuth: [],
  },
];

const createOrUpdateBlogBody = {
  type: 'object',
  properties: {
    Blogname: {
      type: 'string',
      example: 'John Snow',
    },
    email: {
      type: 'string',
      example: 'john.snow@email.com',
    },
    password: {
      type: 'string',
      description: "unencrypted Blog's password",
      example: '!1234aWe1Ro3$#',
    },
  },
};

const updateBlogBody = {
  type: 'object',
  properties: {
    Blogname: {
      type: 'string',
      example: 'John Snow',
    },
  },
};

const createBlog = {
  tags: ['Blogs'],
  description: 'Create a new Blog in the system',
  operationId: 'createBlog',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createBlogBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '201': {
      description: 'Blog created successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60564fcb544047cdc3844818',
              },
              Blogname: {
                type: 'string',
                example: 'John Snow',
              },
              email: {
                type: 'string',
                example: 'john.snow@email.com',
              },
              password: {
                type: 'string',
                example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
              },
              
              createdAt: {
                type: 'string',
                example: '2021-03-20T19:40:59.495Z',
              },
              updatedAt: {
                type: 'string',
                example: '2021-03-20T21:23:10.879Z',
              },
            },
          },
        },
      },
    },
    '422': invalidBlogData,
    '500': internalServerError,
  },
};

const getBlogs = {
  tags: ['Blogs'],
  description: 'Retrieve all the Blogs',
  operationId: 'getBlogs',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Blogs retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: BlogResponseWithRole,
            },
          },
        },
      },
    },
    '500': internalServerError,
  },
};

const getBlog = {
  tags: ['Blogs'],
  description: 'Retrieve one Blog',
  operationId: 'getBlog',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Blog ID',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    '200': {
      description: 'Blog retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: BlogResponseWithRole,
          },
        },
      },
    },
    '404': BlogNotFound,
    '500': internalServerError,
  },
};

const updateBlog = {
  tags: ['Blogs'],
  description: 'Update a Blog',
  operationId: 'updateBlog',
  security,
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Blog ID',
      required: true,
      type: 'string',
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/updateBlogBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'Blog updated successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: BlogResponseWithRole,
          },
        },
      },
    },
    '404': BlogNotFound,
    '422': invalidBlogData,
    '500': internalServerError,
  },
};

const deleteBlog = {
  tags: ['Blogs'],
  description: 'Delete a Blog',
  operationId: 'deleteBlog',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Blog ID',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    '200': {
      description: 'Blog deleted successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Blog deleted successfully!',
              },
            },
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Internal Server Error',
              },
            },
          },
        },
      },
    },
  },
};

export { createBlog, createOrUpdateBlogBody, deleteBlog, getBlogs, getBlog, updateBlogBody, updateBlog };