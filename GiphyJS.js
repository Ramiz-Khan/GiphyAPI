


$( document ).ready(function() {

var buttons = $("#card");
var searchInput = $("input-group input").text();

var buttonsArray = ["Dog", "Cat", "Bird"];

for (i = 0; i < buttonsArray.length; i++) {

$(".choices").html(buttonsArray[i]);

};

//Search input click listener. 

$("button#search-button.btn.btn-secondary").on("click",(function(event) {

event.preventDefault();

console.log("hello");

var searchInput = $("input#search-bar.form-control").val();

clickVal = searchInput;

$("#display-gifs").empty();

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

$("li#choices.list-group-item.btn").on("click" , (function(event) {



console.log("hello");



var searchInput = $("li#choices.list-group-item.btn").html();

clickVal = searchInput;

$("#display-gifs").empty();


$.ajax( {
	url : "http://api.giphy.com/v1/gifs/search?q="+clickVal+"&api_key=07692635cf6a4aa5ab6034071169347c&limit=12",
	method : "GET"
}).done(function (response){



	
for (i=0; i<response.data.length; i++){

	var gifSection = $("#display-gifs");

	var incomingGifs = '<img src="' + response.data[i].images.fixed_height.url + '" />';

	gifSection.append(incomingGifs);


	};

})

}));

});
