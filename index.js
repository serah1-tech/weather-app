const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for weather API integration
app.get('/weather', async (req, res) => {
    const city = req.query.city; // Get the city from the query parameters
    const apiKey = '0b9aa7abb1631c58e229041574e0e53a'; // Replace with your actual API key
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const apiResponse = await axios.get(apiUrl);
        const weather = apiResponse.data;

        res.json({
            temperature: weather.main.temp,
            description: weather.weather[0].description,
            city: weather.name,
            country: weather.sys.country,
        });
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).send('Error fetching weather data');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
