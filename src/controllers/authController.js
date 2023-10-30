import User from '../models/User.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const register = async (req, res) => {
  try{
    // define the body fields
    const { username, email, password } = req.body;

    // validations for all fields
    if(!username.trim()){
      return res.json({ error: "username must not be empty!"})
    }
    if(!email){
      return res.json({ error: "Email must not be empty!"})
    }
    if(!password || password.length < 6){
      return res.json({ error: "password must be at least 6 characters long!"})
    }

    // check if user is already exist
    const userExist = await User.findOne({ email });

    if(userExist){
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Register a new user
    const user = new User({username, email, password: hashedPassword});

    // Save the user in db
    await user.save();

    // remove pasword from res body
    user.password = undefined;

    // create token for new user
    const secret =  process.env.JWT_SECRET
    const token = jwt.sign({userId: user._id}, secret, {expiresIn: "7d"})
    console.log("JWT_SECRET: ", secret);
  
    // send a notification
    res.status(201).json({message: 'User registered successfully', user, token});

  }catch(err){
    res.status(500).json({message: "User registration failed", error: err.message});
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email and password presence
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Find the user by email and explicitly select the password field
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // If the password matches, create and return the JWT token
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '7d' });

    res.status(200).json({ message: 'User logged in successfully', user, token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

export { login, register} 

