


var buttons = $("#card");
var searchInput = $("input-group input").text();

//Search input click listener. 

$("a").on("click",(function() {


console.log(searchInput.text());

console.log("hello");

//var searchInput = $("input-group input#search-bar").val();

clickVal = searchInput;


$.ajax( {
	url : "http://api.giphy.com/v1/gifs/search?q="+clickVal+"&api_key=07692635cf6a4aa5ab6034071169347c&limit=12",
	method : "GET"
}).done(function (response){



	
for (i=0; i<response.data.length; i++){

	var gifSection = $("#display-gifs");

	var incomingGifs = '<img src="' + response.data[i].images.fixed_height.url + '" />';

	gifSection.append(incomingGifs);



	//console.log(imgURL);

	};


})

}));


//Pre loaded button click listener

$("input-group input#search-button").on("click",(function() {


console.log(searchInput.text());

console.log("hello");

//var searchInput = $("input-group input#search-bar").val();

clickVal = searchInput;


$.ajax( {
	url : "http://api.giphy.com/v1/gifs/search?q="+clickVal+"&api_key=07692635cf6a4aa5ab6034071169347c&limit=12",
	method : "GET"
}).done(function (response){



	
for (i=0; i<response.data.length; i++){

	var gifSection = $("#display-gifs");

	var incomingGifs = '<img src="' + response.data[i].images.fixed_height.url + '" />';

	gifSection.append(incomingGifs);



	//console.log(imgURL);

	};


})

}));
