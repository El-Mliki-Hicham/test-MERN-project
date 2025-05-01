const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async () => {
  return await User.find();
};

exports.createUser = async ({ name, email, password }) => {
  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create and save user
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  return user;
};
