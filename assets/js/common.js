// GLOBAL VARIABLES
// ==============================================================
const NUMCARDS = 5;
const SEARCHEDLIST = "Searched";

var gblADJ = "";
var gblID = "";

var objCountry = {
    name: "",
    id: "",
    adj: "",
    isocode: "",
    isSet: false,

};

var country = Object.create(objCountry);


// GLOBAL OBJECT
// ==============================================================

// id = muse api country id
const countries = [
    { id: "1", name: "Afghanistan", iso_code: "AF", adj: "Afghan" },
    { id: "2", name: "Albania", iso_code: "AL", adj: "Albanian" },
    { id: "3", name: "Algeria", iso_code: "DZ", adj: "Algerian" },
    { id: "4", name: "Andorra", iso_code: "AD", adj: "Andorran" },
    { id: "5", name: "Angola", iso_code: "AO", adj: "Angolan" },
    { id: "7", name: "Argentina", iso_code: "AR", adj: "Argentinian" },
    { id: "8", name: "Armenia", iso_code: "AM", adj: "Armenian" },
    { id: "9", name: "Australia", iso_code: "AU", adj: "Australian" },
    { id: "10", name: "Austria", iso_code: "AT", adj: "Austrian" },
    { id: "11", name: "Azerbaijan", iso_code: "AZ", adj: "Azerbaijani" },
    { id: "12", name: "The Bahamas", iso_code: "BS", adj: "Bahamian" },
    { id: "13", name: "Bahrain", iso_code: "BH", adj: "Bahraini" },
    { id: "14", name: "Bangladesh", iso_code: "BD", adj: "Bangladeshi" },
    { id: "15", name: "Barbados", iso_code: "BB", adj: "Barbadian" },
    { id: "16", name: "Belarus", iso_code: "BY", adj: "Belarusian" },
    { id: "17", name: "Belgium", iso_code: "BE", adj: "Belgian" },
    { id: "18", name: "Belize", iso_code: "BZ", adj: "Belizian" },
    { id: "19", name: "Benin", iso_code: "BJ", adj: "Beninese" },
    { id: "20", name: "Bhutan", iso_code: "BT", adj: "Bhutanese" },
    { id: "21", name: "Bolivia", iso_code: "BO", adj: "Bolivian" },
    { id: "22", name: "Bosnia-Herzegovina", iso_code: "BA", adj: "Bosnian" },
    { id: "23", name: "Botswana", iso_code: "BW", adj: "Botswanan" },
    { id: "24", name: "Brazil", iso_code: "BR", adj: "Brazilian" },
    { id: "25", name: "Brunei", iso_code: "BN", adj: "Bruneian" },
    { id: "26", name: "Bulgaria", iso_code: "BG", adj: "Bulgarian" },
    { id: "27", name: "Burkina Faso", iso_code: "BF", adj: "Burkinese" },
    { id: "28", name: "Burundi", iso_code: "BI", adj: "Burundian" },
    { id: "29", name: "Cambodia", iso_code: "KH", adj: "Cambodian" },
    { id: "30", name: "Cameroon", iso_code: "CM", adj: "Cameroonian" },
    { id: "31", name: "Canada", iso_code: "CA", adj: "Canadian" },
    { id: "32", name: "Cape Verde", iso_code: "CV", adj: "Cape Verdean" },
    { id: "34", name: "Chad", iso_code: "TD", adj: "Chadian" },
    { id: "35", name: "Chile", iso_code: "CL", adj: "Chilean" },
    { id: "36", name: "China", iso_code: "CN", adj: "Chinese" },
    { id: "37", name: "Colombia", iso_code: "CO", adj: "Colombian" },
    { id: "38", name: "Comoros", iso_code: "KM", adj: "Comoros" },
    { id: "39", name: "Democratic Republic of the Congo", iso_code: "CD", adj: "Congolese" },
    { id: "40", name: "Republic of the Congo", iso_code: "CG", adj: "Congolese" },
    { id: "41", name: "Costa Rica", iso_code: "CR", adj: "Costa Rican" },
    { id: "43", name: "Croatia", iso_code: "HR", adj: "Croatian" },
    { id: "44", name: "Cuba", iso_code: "CU", adj: "Cuban" },
    { id: "45", name: "Cyprus", iso_code: "CY", adj: "Cypriot" },
    { id: "46", name: "Czech Republic", iso_code: "CZ", adj: "Czech" },
    { id: "47", name: "Denmark", iso_code: "DK", adj: "Danish" },
    { id: "48", name: "Djibouti", iso_code: "DJ", adj: "Djiboutian" },
    { id: "49", name: "Dominica", iso_code: "DM", adj: "Dominican" },
    { id: "50", name: "Dominican Republic", iso_code: "DO", adj: "Dominican" },
    { id: "51", name: "Ecuador", iso_code: "EC", adj: "Ecuadorean" },
    { id: "52", name: "Egypt", iso_code: "EG", adj: "Egyptian" },
    { id: "53", name: "El Salvador", iso_code: "SV", adj: "Salvadorean" },
    { id: "55", name: "Eritrea", iso_code: "ER", adj: "Eritrean" },
    { id: "56", name: "Estonia", iso_code: "EE", adj: "Estonian" },
    { id: "57", name: "Ethiopia", iso_code: "ET", adj: "Ethiopian" },
    { id: "58", name: "Fiji", iso_code: "FJ", adj: "Fijian" },
    { id: "59", name: "Finland", iso_code: "FI", adj: "Finnish" },
    { id: "60", name: "France", iso_code: "FR", adj: "French" },
    { id: "61", name: "Gabon", iso_code: "GA", adj: "Gabonese" },
    { id: "62", name: "The Gambia", iso_code: "GM", adj: "Gambian" },
    { id: "63", name: "Georgia", iso_code: "GE", adj: "Georgian" },
    { id: "64", name: "Germany", iso_code: "DE", adj: "German" },
    { id: "65", name: "Ghana", iso_code: "GH", adj: "Ghanaian" },
    { id: "66", name: "Greece", iso_code: "GR", adj: "Greek" },
    { id: "67", name: "Grenada", iso_code: "GD", adj: "Grenadian" },
    { id: "68", name: "Guatemala", iso_code: "GT", adj: "Guatemalan" },
    { id: "69", name: "Guinea", iso_code: "GN", adj: "Guinean" },
    { id: "71", name: "Guyana", iso_code: "GY", adj: "Guyanese" },
    { id: "72", name: "Haiti", iso_code: "HT", adj: "Haitian" },
    { id: "73", name: "Honduras", iso_code: "HN", adj: "Honduran" },
    { id: "74", name: "Hungary", iso_code: "HU", adj: "Hungarian" },
    { id: "75", name: "Iceland", iso_code: "IS", adj: "Icelandic" },
    { id: "76", name: "India", iso_code: "IN", adj: "Indian" },
    { id: "77", name: "Indonesia", iso_code: "ID", adj: "Indonesian" },
    { id: "78", name: "Iran", iso_code: "IR", adj: "Iranian" },
    { id: "79", name: "Iraq", iso_code: "IQ", adj: "Iraqi" },
    { id: "80", name: "Ireland", iso_code: "IE", adj: "Irish" },
    { id: "81", name: "Israel", iso_code: "IL", adj: "Israeli" },
    { id: "82", name: "Italy", iso_code: "IT", adj: "Italian" },
    { id: "83", name: "Jamaica", iso_code: "JM", adj: "Jamaican" },
    { id: "84", name: "Japan", iso_code: "JP", adj: "Japanese" },
    { id: "85", name: "Jordan", iso_code: "JO", adj: "Jordanian" },
    { id: "86", name: "Kazakhstan", iso_code: "KZ", adj: "Kazakh" },
    { id: "87", name: "Kenya", iso_code: "KE", adj: "Kenyan" },
    { id: "89", name: "North Korea", iso_code: "KP", adj: "North Korean" },
    { id: "90", name: "South Korea", iso_code: "KR", adj: "Korean" },
    { id: "91", name: "Kuwait", iso_code: "KW", adj: "Kuwaiti" },
    { id: "93", name: "Laos", iso_code: "LA", adj: "Laotian" },
    { id: "94", name: "Latvia", iso_code: "LV", adj: "Latvian" },
    { id: "95", name: "Lebanon", iso_code: "LB", adj: "Lebanese" },
    { id: "97", name: "Liberia", iso_code: "LR", adj: "Liberian" },
    { id: "98", name: "Libya", iso_code: "LY", adj: "Libyan" },
    { id: "99", name: "Liechtenstein", iso_code: "LI", adj: "Liechtenstein" },
    { id: "100", name: "Lithuania", iso_code: "LT", adj: "Lithuanian" },
    { id: "101", name: "Luxembourg", iso_code: "LU", adj: "Luxembourg" },
    { id: "102", name: "Macedonia", iso_code: "MK", adj: "Macedonian" },
    { id: "103", name: "Madagascar", iso_code: "MG", adj: "Malagasy" },
    { id: "104", name: "Malawi", iso_code: "MW", adj: "Malawian" },
    { id: "105", name: "Malaysia", iso_code: "MY", adj: "Malaysian" },
    { id: "106", name: "Maldives", iso_code: "MV", adj: "Maldivian" },
    { id: "107", name: "Mali", iso_code: "ML", adj: "Malian" },
    { id: "108", name: "Malta", iso_code: "MT", adj: "Maltese" },
    { id: "110", name: "Mauritania", iso_code: "MR", adj: "Mauritanian" },
    { id: "111", name: "Mauritius", iso_code: "MU", adj: "Mauritian" },
    { id: "112", name: "Mexico", iso_code: "MX", adj: "Mexican" },
    { id: "114", name: "Moldova", iso_code: "MD", adj: "Moldovan" },
    { id: "115", name: "Monaco", iso_code: "MC", adj: "Monegasque" },
    { id: "116", name: "Mongolia", iso_code: "MN", adj: "Mongolian" },
    { id: "117", name: "Montenegro", iso_code: "ME", adj: "Montenegrin" },
    { id: "118", name: "Morocco", iso_code: "MA", adj: "Moroccan" },
    { id: "119", name: "Mozambique", iso_code: "MZ", adj: "Mozambican" },
    { id: "120", name: "Myanmar", iso_code: "MM", adj: "Burmese" },
    { id: "121", name: "Namibia", iso_code: "NA", adj: "Namibian" },
    { id: "123", name: "Nepal", iso_code: "NP", adj: "Nepalese" },
    { id: "124", name: "Netherlands", iso_code: "NL", adj: "Dutch" },
    { id: "125", name: "New Zealand", iso_code: "NZ", adj: "New Zealand" },
    { id: "126", name: "Nicaragua", iso_code: "NI", adj: "Nicaraguan" },
    { id: "127", name: "Niger", iso_code: "NE", adj: "Nigerien" },
    { id: "128", name: "Nigeria", iso_code: "NG", adj: "Nigerian" },
    { id: "129", name: "Norway", iso_code: "NO", adj: "Norwegian" },
    { id: "130", name: "Oman", iso_code: "OM", adj: "Omani" },
    { id: "131", name: "Pakistan", iso_code: "PK", adj: "Pakistani" },
    { id: "133", name: "Panama", iso_code: "PA", adj: "Panamanian" },
    { id: "134", name: "Papua New Guinea", iso_code: "PG", adj: "Guinean" },
    { id: "135", name: "Paraguay", iso_code: "PY", adj: "Paraguayan" },
    { id: "136", name: "Peru", iso_code: "PE", adj: "Peruvian" },
    { id: "137", name: "Philippines", iso_code: "PH", adj: "Philippine" },
    { id: "138", name: "Poland", iso_code: "PL", adj: "Polish" },
    { id: "139", name: "Portugal", iso_code: "PT", adj: "Portuguese" },
    { id: "140", name: "Qatar", iso_code: "QA", adj: "Qatari" },
    { id: "141", name: "Romania", iso_code: "RO", adj: "Romanian" },
    { id: "142", name: "Russia", iso_code: "RU", adj: "Russian" },
    { id: "143", name: "Rwanda", iso_code: "RW", adj: "Rwandan" },
    { id: "150", name: "Saudi Arabia", iso_code: "SA", adj: "Saudi" },
    { id: "151", name: "Senegal", iso_code: "SN", adj: "Senegalese" },
    { id: "152", name: "Serbia", iso_code: "RS", adj: "Serbian" },
    { id: "153", name: "Seychelles", iso_code: "SC", adj: "Seychellois" },
    { id: "154", name: "Sierra Leone", iso_code: "SL", adj: "Sierra Leonian" },
    { id: "155", name: "Singapore", iso_code: "SG", adj: "Singaporean" },
    { id: "156", name: "Slovakia", iso_code: "SK", adj: "Slovak" },
    { id: "157", name: "Slovenia", iso_code: "SI", adj: "Slovenian" },
    { id: "158", name: "Solomon Islands", iso_code: "SB", adj: "Solomon Islands" },
    { id: "159", name: "Somalia", iso_code: "SO", adj: "Somali" },
    { id: "160", name: "South Africa", iso_code: "ZA", adj: "South African" },
    { id: "161", name: "Spain", iso_code: "ES", adj: "Spanish" },
    { id: "162", name: "Sri Lanka", iso_code: "LK", adj: "Sri Lankan" },
    { id: "163", name: "Sudan", iso_code: "SD", adj: "Sudanese" },
    { id: "164", name: "Suriname", iso_code: "SR", adj: "Surinamese" },
    { id: "165", name: "Swaziland", iso_code: "SZ", adj: "Swazi" },
    { id: "166", name: "Sweden", iso_code: "SE", adj: "Swedish" },
    { id: "167", name: "Switzerland", iso_code: "CH", adj: "Swiss" },
    { id: "168", name: "Syria", iso_code: "SY", adj: "Syrian" },
    { id: "169", name: "Tajikistan", iso_code: "TJ", adj: "Tajik" },
    { id: "170", name: "Tanzania", iso_code: "TZ", adj: "Tanzanian" },
    { id: "171", name: "Thailand", iso_code: "TH", adj: "Thai" },
    { id: "173", name: "Togo", iso_code: "TG", adj: "Togolese" },
    { id: "176", name: "Tunisia", iso_code: "TN", adj: "Tunisian" },
    { id: "177", name: "Turkey", iso_code: "TR", adj: "Turkish" },
    { id: "178", name: "Turkmenistan", iso_code: "TM", adj: "Turkmen" },
    { id: "179", name: "Tuvalu", iso_code: "TV", adj: "Tuvaluan" },
    { id: "180", name: "Uganda", iso_code: "UG", adj: "Ugandan" },
    { id: "181", name: "Ukraine", iso_code: "UA", adj: "Ukrainian" },
    { id: "182", name: "United Arab Emirates", iso_code: "AE", adj: "Emirati" },
    { id: "183", name: "United Kingdom", iso_code: "GB", adj: "British" },
    { id: "184", name: "United States of America", iso_code: "US", adj: "American" },
    { id: "185", name: "Uruguay", iso_code: "UY", adj: "Uruguayan" },
    { id: "186", name: "Uzbekistan", iso_code: "UZ", adj: "Uzbek" },
    { id: "187", name: "Vanuatu", iso_code: "VU", adj: "Vanuatuan" },
    { id: "188", name: "Vatican City", iso_code: "VA", adj: "Vatican" },
    { id: "189", name: "Venezuela", iso_code: "VE", adj: "Venezuelan" },
    { id: "190", name: "Vietnam", iso_code: "VN", adj: "Vietnamese" },
    { id: "191", name: "Yemen", iso_code: "YE", adj: "Yemeni" },
    { id: "192", name: "Zambia", iso_code: "ZM", adj: "Zambian" },
    { id: "193", name: "Zimbabwe", iso_code: "ZW", adj: "Zimbabwean" },
    { id: "195", name: "Taiwan", iso_code: "TW", adj: "Taiwanese" },
    { id: "185", name: "Scotland", iso_code: "GB", adj: "Scottish" },
    { id: "185", name: "Britain", iso_code: "GB", adj: "British" },
    { id: "185", name: "Wales", iso_code: "GB", adj: "Welsh" },
];

//store searches
var countrySearchList = [];

//clear the cards 
function clear() {
    $("#tourist-list").empty();
    $("#recipe-list").empty();
}


/*

  <button class="button is-rounded">Rounded</button>
        <button class="button is-primary is-rounded">Rounded</button>
        <button class="button is-link is-rounded">Rounded</button>
        <button class="button is-info is-rounded">Rounded</button>
        <button class="button is-success is-rounded">Rounded</button>
        <button class="button is-danger is-rounded">Rounded</button>
*/

// STORE / DISPLAY SEARCHED COUNTRIES
// ==============================================================

function storeSearchList() {
    console.log("storing: " + JSON.stringify(countrySearchList));

    localStorage.setItem(SEARCHEDLIST, JSON.stringify(countrySearchList));
}

//initSearchList
function initSearchList() {

    console.log("init SearchList");

    var storedList = JSON.parse(localStorage.getItem(SEARCHEDLIST));

    if (storedList == null) {
        console.log("No previous searches!");

        return;
    }
    else {
        console.log("WE'RE ON TO SOMETHING");
        countrySearchList = storedList;
        renderSearchList();
    }
}

function printSearchList() {
    for (let i = 0; i < countrySearchList.length; i++) {

        console.log(JSON.stringify(countrySearchList[i]));
    }
}

function renderSearchList() {

    if (countrySearchList == null) {
        return;
    }

    //clear the button list
    $("#search-list").empty();

    for (let i = 0; i < countrySearchList.length; i++) {

        console.log("rendering: " + countrySearchList[i].name);

        var $searchedCountry = $("<button>").addClass("button is-primary is-rounded searched");
        $searchedCountry.text(countrySearchList[i].name);
        $searchedCountry.data("museid", countrySearchList[i].id);
        $searchedCountry.data("name", countrySearchList[i].name);
        $searchedCountry.data("adj", countrySearchList[i].adj);
        $searchedCountry.data("isocode", countrySearchList[i].iso_code);

        $("#search-list").append($searchedCountry);
    }

}

function getSearchedCountryData(event) {

    console.log("do previous search");

    event.preventDefault();

    country.adj = $(this).data("adj");
    country.id = $(this).data("museid");
    country.name = $(this).data("name");
    country.isocode = $(this).data("isocode");
    country.isSet = true;
    $("#output-country").text(country.name);

    getTouristAPI();
    getRecipeAPI();
}



$(document).ready(function () {

    console.log(country.isSet);

    // Create the Dropdown
    for (let i = 0; i < countries.length; i++) {
        //console.log(countries[i]);
        var $aCntry = $("<a>").addClass("dropdown-item").attr("href", "#");
        $aCntry.text(countries[i].name);
        $aCntry.data("museid", countries[i].id);
        $aCntry.data("name", countries[i].name);
        $aCntry.data("adj", countries[i].adj);
        $aCntry.data("isocode", countries[i].iso_code);
        $("#cntry-choice").append($aCntry);
    }


    //when the dropdown is clicked, show items, make it tabbable
    $("#dropdown-btn").on("click", function () {
        $(".dropdown").addClass("is-active");
        $(".dropdowm-item").attr("tabindex", "0");
    })


    //when an item is clicked, get what it was and store it
    $(".dropdown-item").on("click", function () {
        console.log($(this).data("name"));
        console.log($(this).data("adj"));
        console.log($(this).data("isocode"));
        console.log($(this).data("museid"));

        $("#choice").text($(this).data("name"));

        country.adj = $(this).data("adj");
        country.id = $(this).data("museid");
        country.name = $(this).data("name");
        country.isocode = $(this).data("isocode");
        country.isSet = true;

        //add to searchedList


        $(".dropdown").removeClass("is-active");
    })


    //when search btn clicked, update country area
    $("#search-btn").on("click", function (event) {

        event.preventDefault();


        if (country.isSet) {

            //create new variable of country object
            var tmpCountry = $.extend(true,{},country);

            $("#output-country").text(country.name);

            console.log(country.isSet);

            // countrySearchList.push(tmpCountry);

            
            if(countrySearchList.length > 4){
                countrySearchList.pop();
                countrySearchList.unshift(tmpCountry);
                console.log("adding: " + tmpCountry.name);

            }
            else{
                countrySearchList.unshift(tmpCountry);
                console.log("adding new: " + tmpCountry.name);
            }

           // printSearchList();
        }

        storeSearchList();
        renderSearchList();
    })

    initSearchList();


});


// Adding a click event listener to all elements with a class of searched
$(document).on("click", ".searched", getSearchedCountryData);   