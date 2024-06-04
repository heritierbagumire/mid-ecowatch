const clientSchema = require("../models/client.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.saveData = async (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    console.log("Data to be inserted can not contain an empty column!");
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const clientRegister = new clientSchema({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedClient = await clientRegister.save();
    const clientUsername = savedClient.username
    const clientEmail = savedClient.email
    const clientPassword = savedClient.password
    res.status(201).send({
      message: "Client saved successfully",
      ClientRegister: {clientUsername, clientEmail, clientPassword}
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "An error was found.",
      error: error.message,
    });
  }
};
exports.retrieveAllClients = async (req, res) => {
  try {
    const reports = await clientSchema.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await clientSchema.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unknown user with the given email" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Email entered doesn't match the password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "300s",
    });
    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ message: "An error occurred while comparing passwords.", error });
  }
};