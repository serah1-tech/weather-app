$(document).ready(function() {
    $('#weatherForm').submit(function(e) {
        e.preventDefault();

        const city = $('#city').val();
        
        $.get(`/weather?city=${city}`, function(data) {
            const weatherData = `
                <h2>${data.city}, ${data.country}</h2>
                <p>Temperature: ${data.temperature}°C</p>
                <p>Description: ${data.description}</p>
            `;
            $('#weatherData').html(weatherData);
        }).fail(function() {
            $('#weatherData').html('<p>Error fetching weather data. Please try again.</p>');
        });
    });
});
