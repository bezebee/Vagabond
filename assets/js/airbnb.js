fetch("https://mashvisor-api.p.rapidapi.com/property?id=2430136&state=CA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
		"x-rapidapi-key": "3510e9149fmshe8982972c2802b1p1d8d40jsn4d64bafbab55"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});