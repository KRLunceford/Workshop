var Choices = [
	{
		"area": "Estes Park",
		boolean: false,
		"time" : "",
		"activities": [
			{ 
				boolean: false,
				"name": "Stone Brooke Resort",
			},
			{
				boolean: false,
				"name":"Stanley Hotel",
			},
			{
				boolean: false,
				"name":"Della Terra Chateau",
			},
			{
				boolean: false,
				"name": "YMCA Resort",
			},
			{
				boolean: false,
				"name": "Chocolate Factory",
			},
			{
				boolean: false,
				"name": "Rocky Mountain Soap",
			},
			{
				boolean: false,
				"name": "Alpenglow Sports",
			},
			{
				boolean: false,
				"name": "TrenZ at the Park",
			},
			{
				boolean: false,
				"name": "The Egg & I",
			},
			{
				boolean: false,
				"name": "The Rock Inn",
			},
			{
				boolean: false,
				"name": "Cascades",
			},
			{
				boolean: false,
				"name": "Chocolate Factory",
			}
		]
	},
	{
		"area": "Bear Lake",
		boolean: false,
		"time" : "",
		"activities": [
			{ 
				boolean: false,
				"name": "Hiking",
			},
			{
				boolean: false,
				"name":"Nature",
			},
			{
				boolean: false,
				"name":"Driving",
			},
			{
				boolean: false,
				"name": "Wildlife",
			}
		]
	},
	{
		"area": "Longs Peak",
		boolean: false,
		"time" : "",
		"activities": [
			{ 
				boolean: false,
				"name": "Hiking",
			},
			{
				boolean: false,
				"name":"Nature",
			},
			{
				boolean: false,
				"name":"Driving",
			},
			{
				boolean: false,
				"name": "Wildlife",
			}
		]
	},
	{
		"area": "Moraine Park",
		boolean: false,
		"time" : "",
		"activities": [
			{ 
				boolean: false,
				"name": "Hiking",
			},
			{
				boolean: false,
				"name":"Nature",
			},
			{
				boolean: false,
				"name":"Driving",
			},
			{
				boolean: false,
				"name": "Wildlife",
			}
		]
	},
	{
		"area": "Sprague Lake",
		boolean: false,
		"time" : "",
		"activities": [
			{ 
				boolean: false,
				"name": "Hiking",
			},
			{
				boolean: false,
				"name":"Nature",
			},
			{
				boolean: false,
				"name":"Driving",
			},
			{
				boolean: false,
				"name": "Wildlife",
			}
		]
	},
	{
		"area": "Trail Ridge",
		boolean: false,
		"time" : "",
		"activities": [
			{ 
				boolean: false,
				"name": "Hiking",
			},
			{
				boolean: false,
				"name":"Nature",
			},
			{
				boolean: false,
				"name":"Driving",
			},
			{
				boolean: false,
				"name": "Wildlife",
			}
		]
	}
]

var item = '';

function hideNote() {
	document.getElementById('notification').style.visibility = 'hidden';
}
function showNote(item) {
	var text = item + " added to itinerary! <br /><a onclick='hideNote()'>Click to Close.</a>";
	document.getElementById('notification').innerHTML = text;
	document.getElementById('notification').style.visibility = 'visible';
}
		  
function store(area, name) {
	if (localStorage.Choices) {
		var tC = JSON.parse(localStorage.Choices);
	} else {
		var tC = Choices;
	}
	for (i=0; i<tC.length; i++) {
			if (tC[i].area == area) {
				for (k=0; k<tC[i].activities.length; k++) {
					if ( tC[i].activities[k].name == name ) {
						tC[i].activities[k].boolean = true;
						tC[i].boolean = true;
						var item = tC[i].activities[k].name;
						showNote(item);
						console.log(item);
					}
				}
			}
		}
	tC = JSON.stringify(tC);
	localStorage.Choices = tC;
	//console.log(tC);
	console.log(localStorage.Choices);
}
function removeItin(area, item) {
	console.log(area);
	if (localStorage.Choices) {
		console.log(area);
		var tC = JSON.parse(localStorage.Choices);
		var areaT = false;
		for (i=0; i<tC.length; i++) {
			if (area == 'all') {
				localStorage.removeItem("Choices");
			} else if (tC[i].area == area) {
				for (k=0; k<tC[i].activities.length; k++) {
					if (tC[i].activities[k].name == item) {
						tC[i].activities[k].boolean = false;
					} else if (tC[i].activities[k].boolean == true) {
						areaT = true;
					}
				}
				if (!areaT) {
					tC[i].boolean = false;
				}
				break;
			}
		}
		window.location.href='Itinerary.html';
	}
}
function timeStore(area, time) {
	if (localStorage.Choices) {
		var tC = JSON.parse(localStorage.Choices);
	} else {
		var tC = Choices;
	}
	for (i=0; i<tC.length; i++) {
		if (tC[i].area == area) {
			tC[i].time = time;
			tC[i].boolean = true;
			item = time;
			showNote(time);
		}
	}
	tC = JSON.stringify(tC);
	localStorage.Choices = tC;
}