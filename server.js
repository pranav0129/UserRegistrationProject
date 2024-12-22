const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path'); // Import path module

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the registration form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  console.log('Serving file:', path.join(__dirname, 'congratulations.html')); // Debugging log

  res.sendFile(path.join(__dirname, 'congratulations.html'), (err) => {
    if (err) {
      console.error('Error sending file:', err.message); // Log the error
      res.status(500).send('Congratulations page could not be displayed.');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




// Serve static files (like CSS, images, etc.) from the project folder
app.use(express.static(path.join(__dirname)));
