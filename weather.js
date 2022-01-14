var apikey = "1a7bfdf751c8a1d582ed70f2f0887fb8"

fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=${apikey}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": apikey,
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });