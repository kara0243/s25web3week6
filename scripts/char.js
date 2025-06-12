//this is an array inside an array
const charInfo = [
	[
		"Compost Heap",
		"Food Taster",
		"Compost Heap's strengths are in the creation of delicious and nutritious foodstuffs to heal the group.  Of course, he always keeps a little bit for himself.",
		"compostHeap.gif",
		60,
		80,
		50
	],
	["Felix", "Basket Weaver", "Weaving is a dangerous profession, as Felix knows. Trained from a young age, he can take any wooden object and turn it into a deadly basket.", "felix.gif", 75, 50, 60],["Robopig", "Dentist", "Finding treasure is a lot like pulling teeth, and it turns out that plyers, drills, and mirrors on little sticks are great out on the field.  Robopig is the innovator of the group, and she always has some item for the task at hand.", "robopig.gif", 70, 40, 70],["Slimy", "Proctologist", "Silmy can be a real pain in the nether regions to her enemies, and is most efficient wielding heated iron rods. She is also the brains of the group, easily solving any puzzle.", "slimeMan.gif", 40, 70, 75],["Sock Monster", "Dragon Slayer", "Easily the strongest of the group, Sock Monster can wield any type of weapon, but is most deadly with anything made from cotton.  Dragons beware!", "sockMonster.gif", 90, 30, 75]
];

//12. call to add a character when the page first loads
updateInfo(0);

//9. for the code on line 86 add all this content into a function

function updateInfo(characterNumber) {

	//10.the variable characterName is sent when the function is called
	//it will be a number between 0-4, telling us which position in the array to get the character's info from

	//11.because now we're changing this dynamically, we need to remove the old info
	document.querySelector("#cInfo1").innerHTML="";

	//add the initial character value(when the page first loads)
	//using document.createElement
	//we use const because it's the least memory use

	const charName = document.createElement("h3");

	//give it the id
	charName.id = "cName";

	//add the charactet's name from the array (use the first character set) get it from array with[]
	//from the array, get the first value from that (0), which is also an array so [][]
	charName.textContent = charInfo[characterNumber][0];

	//get the cInfo1 div so we can add the charName element to the page
	document.querySelector("#cInfo1").appendChild(charName);

	const charJob = document.createElement("h3");
	charJob.id = "cJob";
	charJob.textContent = charInfo[characterNumber][1];
	document.querySelector("#cInfo1").appendChild(charJob);

	//use the template and the template literal method to add an image
	const imageHolder = document.querySelector("#picholder");

	//put the image info into a variable to add it dynamically
	const charImage = charInfo[characterNumber][3];

	//use the ${} placeholder method to add the info from the array
	const htmlTemplate = `<img src="images/${charImage}" alt="">`;

	//create the HTML as a template, using backticks``
	// const htmlTemplate = `<img src="images/compostHeap.gif" alt="">`; this is the first way that we did it

	//add the template to the page using inneHTML
	imageHolder.innerHTML = htmlTemplate;
}


//meke the buttons clickable 
//we have 5 buttons so we need a loop instead of doing it for each.
//create a loop

//1.get all the elements
const buttons = document.querySelectorAll(".cButton");

//2. create the loop, where to start, how long to keep going and third how much to count by
for (let i=0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", changeCharacter);
}

//3.create the function
function changeCharacter() {
	//console.log(this); "this" mean whichever element that i am interacting with

	//5. first, remove the "activated" class from th epreviously activated button

	document.querySelector(".activated").classList.remove("activated");

	//4. then, make this button activaed (by adding the class activated)
	this.classList.add("activated");

	//6.figure out which number this child is, so we can apply the info about the appropriate character
	let allChildren = this.parentNode.children;

	//8.because allChildren is not a "true" array, but a collection of HTML elemets we have to convert it to a true array first

	allChildren = Array.from(allChildren);

	//7.use indexOf to find out what position this element is

	const pos = allChildren.indexOf(this);

	//8. call a function to update the info, send it to the element's current position(which button we clicked on), we'll use that position to get the correct character from the array
	updateInfo(pos);
}