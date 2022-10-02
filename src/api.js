export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d5e159769mshd2f5a14f2cc6970p1682cbjsn00e4ae61f6a8',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));