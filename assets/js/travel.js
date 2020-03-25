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

function updateTravel(TravelData) {
    //var numTravelCards = "5"

    $("#tourist-list").empty()

    for (var i = 0; i < NUMCARDS; i++) {
        console.log(TravelData[i])
        console.log("city;" + TravelData[i].city.name)
        console.log("title;" + TravelData[i].title)
        console.log("description;" + TravelData[i].description)
        console.log("categories;" + TravelData[i].categories[0].name)

        var $colCard = $("<div>").addClass("column");
        var $card = $("<div>").addClass("card");
        $colCard.append($card)

        var $cardHeader = $("<header>").addClass("card-header");
        $card.append($cardHeader)

        var $pHeader = $("<p>").addClass("card-header-title").text(TravelData[i].city.name);
        $cardHeader.append($pHeader)

        var $cardContent = $("<div>").addClass("card-content");
        $card.append($cardContent)
        var $pTitle = $("<p>").addClass("content").text(TravelData[i].title);
        var $pDescription = $("<p>").addClass("content").text(TravelData[i].description);
        $cardContent.append($pTitle)
        $cardContent.append($pDescription)

        $("#tourist-list").append($colCard)
    }
}


$(document).ready(function () {
    $("#search-btn").on("click", function (event) {
        event.preventDefault()
        var input = $("#input-country").val()
        console.log(input)
        settings.url = buildQueryURL()
        $.ajax(settings).done(updateTravel);


    })
}


)



