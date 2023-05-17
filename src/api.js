export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/';
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
export const WEATHER_API_KEY = "7583274f3c426dda1b2f24268fcf7921"

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec696d8e81msh6d059ed09a47f1dp175aecjsnac1f3cf04860',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch(GEO_API_URL, geoApiOptions)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err))