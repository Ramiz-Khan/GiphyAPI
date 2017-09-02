


$( document ).ready(function() {

var buttons = $("#card");
var searchInput = $("input-group input").text();

var buttonsArray = ["Dog", "Cat", "Bird", "Elephant"];

for (i = 0; i < buttonsArray.length; i++) {



var cardCreate = '<li class="list-group-item btn choices">' + buttonsArray[i] + '</li>';

var ulList = $("ul#cards");

ulList.append(cardCreate);

};

//Search input click listener. 

$("button#search-button.btn.btn-secondary").on("click",(function(event) {

event.preventDefault();

console.log("hello");

var searchInput = $("input#search-bar.form-control").val();

clickVal = searchInput;

var cardCreate = '<li class="list-group-item btn choices">' + clickVal + '</li>';

var ulList = $("ul#cards");

ulList.append(cardCreate);

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

$("li.list-group-item.btn.choices").on("click" , (function(event) {


var searchInput = $(this).text();

clickVal = searchInput;


console.log(searchInput);

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
