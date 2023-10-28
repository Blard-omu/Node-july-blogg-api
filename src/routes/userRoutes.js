import express from 'express';
import { getAllUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

/**
 * /**
 * @swagger
 *    components:
 *      schemas:
 *        User:
 *          type: object
 *          properties:
 *            id:
 *              type: integer
 *              description: The auto-generated id of the user.
 *            email:
 *              type: string
 *              description: The email of the user.
*/

/** 
 * 
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of all users
 responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
            example:
             _id: 1
             username: "blard"
             email: "blard@example.com"
 */
router.get('/users', getAllUsers);
router.get('/users/:_id', getUser);


/**
 * @swagger
 * /api/users/{_id}:
 *   put:
 *     summary: Update a user
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put('/api/v1/users/:_id', updateUser);

/**
 * @swagger
 * /api/users/{_id}:
 *   delete:
 *     summary: Delete a user
 *     parameters:
 *       - inapi/: path
 *         name: _id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/api/v1/users/:_id', deleteUser);

export default router;
