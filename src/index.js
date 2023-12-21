const express = require("express");

//Initializer your server
const app = express();

//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

//Defining of Route (What you want a certain endpoint to do)
//Get Route
app.get("/greet", (req, res) => {
  //Send back the response with status code 200 and message "Hello World!"
  return res.status(200).json({ message: "George" });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username !== "George" || password !== "jgaajhva") {
    return res.status(400).json({ message: "Invalid details" });
  }
  return res.status(200).json({ Message: "You have successfully logged in" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
