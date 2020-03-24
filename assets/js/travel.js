const NUMCARDS = 5
var settings = {
    // "async": true,
    // "crossDomain": true,
    "url": "",
    "method": "GET",
    "headers": {
        "accept": "application/json",
        "accept-language": "en-US",
        "x-musement-currency": "USD"
    }
}
function buildQueryURL() {
    var countryID = "82"

    var queryURL = `https://sandbox.musement.com/api/v3/countries/${countryID}/activities?offset=0&limit=10`;
    return queryURL
}
settings.url = buildQueryURL()
$.ajax(settings).done(updateTravel);

function updateTravel(TravelData) {
    var numTravelCards = "5"
    for (var i = 0; i < NUMCARDS; i++) {
        console.log("city;" + TravelData[i].city.name)
        console.log("title;" + TravelData[i].title)
        console.log("description;" + TravelData[i].description)
        console.log("categories;" + TravelData[i].categories[0].name)
    }
}




