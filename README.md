# weather-app
a simple weather app using API from openweatherapp
Weather App 🌦️
A simple web application to fetch and display the current weather of a city using the OpenWeatherMap API.

Features
Input a city name to get real-time weather data.
Displays:
Temperature in Celsius.
Weather description (e.g., clear sky, rain).
City and country.
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd weather_app
2. Install Dependencies
Ensure Node.js is installed on your system. Then run:

bash
Copy code
npm install express axios
3. Get an API Key
Visit OpenWeatherMap.
Sign up and get your free API key.
Replace your_actual_api_key_here in index.js with your API key.
4. Run the Server
Start the backend:

bash
Copy code
node index.js
5. Open in Browser
Go to:

arduino
Copy code
http://localhost:3000
File Structure
index.html: The user interface.
index.js: The server code (handles API requests).
styles.css: Styles for the application.
Technologies Used
Frontend: HTML, CSS, JavaScript.
Backend: Node.js, Express.js.
API: OpenWeatherMap.
Example
Open the app in your browser.
Enter a city name (e.g., Nairobi).
Click Get Weather.
See the weather details displayed!
