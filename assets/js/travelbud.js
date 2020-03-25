//Mine//
const NUMCARDS = 5
var settings = {
    // "async": true,
    // "crossDomain": true,
    "url": "",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key": "e479f117b8msh8b7892b19f6f980p19340ejsn31b8edf21f90"
    }
}
function buildRecipeURL() {
    var countryCuisine = "italian"

    var queryURL = `https://recipe-puppy.p.rapidapi.com/?q=${countryCuisine}`;
    return queryURL
}
settings.url = buildRecipeURL()
$.ajax(settings).done(updateRecipe);

function updateRecipe(RecipeData) {
    var jsonRecipeData = JSON.parse(RecipeData)
    var resultsArr = jsonRecipeData.results
    console.log(RecipeData);

    for (var i = 0; i < NUMCARDS; i++) {
        console.log("title;" + resultsArr[i].title)
        console.log("ingredients;" + resultsArr[i].ingredients)
        console.log("url;" + resultsArr[i].href)
        console.log("pic;" + resultsArr[i].thumbnail);

        var $colCard = $("<div>").addClass("column");
        var $card = $("<div>").addClass("card");
        $colCard.append($card)

        var $cardHeader = $("<header>").addClass("card-header");
        $card.append($cardHeader)

        var $pHeader = $("<p>").addClass("card-header-title").text(resultsArr[i].title);
        $cardHeader.append($pHeader)

        var $cardContent = $("<div>").addClass("card-content");
        $card.append($cardContent)

        var $pTitle = $("<p>").addClass("content").text("ingredients:\n" + resultsArr[i].ingredients);
        $cardContent.append($pTitle)
        
        var $cardFooter = $("<footer>").addClass("card-footer");
        $card.append($cardFooter)

        var $aFooter = $("<a>").addClass("card-footer-item").attr({href:resultsArr[i].href,target:"_blank"});
        $aFooter.text("view full recipe here")
        $cardFooter.append($aFooter)

        $("#recipe-list").append($colCard)


    }
}


$(document).ready()