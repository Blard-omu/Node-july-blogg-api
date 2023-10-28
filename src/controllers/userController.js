import User from '../models/User.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};


// Controller to get a specific user by ID
const getUser = async (req, res) => {
  try {
    const { _id } = req.params; 

    // Use Mongoose to find the user by ID
    const user = await User.findById(_id);

    if (!user) { 
      // If the user is not found, return a 404 Not Found response
      return res.status(404).json({ message: 'User not found' });
    }

    // If the user is found, return the user data
    res.status(200).json(user);
  } catch (error) {
    // Handle any errors (e.g., database connection issues)
    res.status(500).json({ message: 'Failed to retrieve user', error: error.message });
  }
};




const updateUser = async (req, res) => {
  try {
    const { _id } = req.params; 
    const updatedUserData = req.body;

    const updatedUser = await User.findByIdAndUpdate(_id, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user', error: error.message });
  }
};

// 

const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params; // User _id from the request URL

    const deletedUser = await User.findByIdAndDelete(_id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error: error.message });
  }
};



export { getAllUsers, getUser, updateUser, deleteUser};
