//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getMarketData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', market_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
        console.log(request.responseText)
	//get all the movies records into our movie array        
	market_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	console.log(market_array) // output to console        
	//call the function so as to display all movies tiles for "Now Showing"        
    displayMarkets(category)
    };    

//This command starts the calling of the movies web api    
    request.send(); 
}


function displayMarkets(category) {
    var table = document.getElementById("marketTable");
    var marketCount = 0;
    
    table.innerHTML = "";
    totalMarkets = market_array.length;
    for (var count = 0; count < totalMarkets; count++) {
            var thumbnail = market_array[count].image;
            var title = market_array[count].market_name;
	        var cell = '<div class="card col-md-3" ><img class="cellbg card-img-top" src="' + thumbnail + '" height = 300px; width = 350px; alt="Card image cap">\
                        <h5 style="padding-left:10px;cursor:pointer" data-toggle="modal" data-target="#marketModal" class="card-title" item="' + count + '" onClick="showMarketDetails(this)">' + title + '</h5></div>\
</div>' 
            table.insertAdjacentHTML('beforeend', cell);
            marketCount++;}
         
    }



//This function is to display the "Now Showing" movies
function listMarkets() {
    category = "All Markets";
    displayMarkets(category);
    document.getElementById("allMarkets").classList.add("active");
}


function showMarketDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("location").textContent = market_array[item].location;
    document.getElementById("number_of_stalls").textContent = market_array[item].number_of_stalls;
    document.getElementById("nearest_mrt").textContent = market_array[item].nearest_mrt;
    document.getElementById("market_name").textContent = market_array[item].market_name;
    document.getElementById("description").textContent = market_array[item].description;
    document.getElementById("image").src = market_array[item].image; 
}


