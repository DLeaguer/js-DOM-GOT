/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark
Slogan: As High as Honor

Please also use CSS to style up your work 

*/
// console.log('sanity');

var kingdoms = [{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark", words: "As High As Honor"},{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister", words: "We Stand Together"},{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign", words: "We Do Not Sow"},{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen", words: "Hear Me Roar!"}, { crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign", words: "Winter Is Coming"},{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign", words: "Fire And Blood"}];

var getMain = document.getElementById('main');

for (var i=0; i<kingdoms.length; i++){
	
	var mainDiv = document.createElement('div');
	mainDiv.className = 'main';
	main.appendChild(mainDiv);

	var crestImg = document.createElement('img');
	crestImg.className = 'crest';
	crestImg.src = kingdoms[i].crest;
	crestImg.alt = kingdoms[i].house;
	mainDiv.appendChild(crestImg);

	var houseDiv = document.createElement('div');
	houseDiv.className = 'house';
	houseDiv.innerHTML = kingdoms[i].house;
	mainDiv.appendChild(houseDiv);

	var regionDiv = document.createElement('div');
	regionDiv.className = 'region';
	regionDiv.innerHTML = 'Region: ' + kingdoms[i].region;
	houseDiv.appendChild(regionDiv);

	var lordDiv = document.createElement('div');
	lordDiv.className = 'lord';
	lordDiv.innerHTML = 'Lord: ' + kingdoms[i].lord;
	regionDiv.appendChild(lordDiv);

	var allegDiv = document.createElement('div');
	allegDiv.className = 'alleg';
	allegDiv.innerHTML = 'Sworn to ' + kingdoms[i].allegiance;
	lordDiv.appendChild(allegDiv);

 	var wordDiv = document.createElement('div');
	wordDiv.className = 'word';
	wordDiv.innerHTML = '"' + kingdoms[i].words + '"';
	allegDiv.appendChild(wordDiv);

}

var getCrest = document.getElementsByClassName('main');

for (var i=0; i<getCrest.length; i++){
	getCrest[i].addEventListener('click', showRegion);
}

function showRegion(){
	var getHouse = this.querySelectorAll('.house')[0];
	if (getHouse.style.display === 'none'){
		getHouse.style.display = 'block';
	}else{
		getHouse.style.display = 'none';
	}
}

