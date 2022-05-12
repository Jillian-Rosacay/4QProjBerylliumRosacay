var easyQuestions = ["When did Stray Kids debut?", "Who is Stray Kids's leader?", "What was Stray Kids's title track for their pre-debut EP, Mixtape?", 
"How many members are there currently in Stray Kids?", "Stray Kids is under what company?", "Who is Stray Kids's maknae?", "Which members were born on the year 2000?"];
var easyChoices = new Array(7);

	easyChoices[0] = ["February 19, 2017", "March 25, 2018", "April 4, 2018", "December 18, 2017"];
	easyChoices[1] = ["Bang Chan", "Lee Know", "Hyunjin", "Han"];
	easyChoices[2] = ["Spread My Wings", "YAYAYA", "4419", "Hellevator"];
	easyChoices[3] = ["7", "8", "9", "10"];
	easyChoices[4] = ["YG Entertainment", "SM Entertainment", "JYP Entertainment", "HYBE Labels"];
	easyChoices[5] = ["Felix", "Changbin", "I.N", "Seungmin"];
	easyChoices[6] = ["Han", "Lee Know", "Felix", "I.N", "Changbin", "Bang Chan", "Hyunjin", "Seungmin"];

// The other question difficulties will be added soon. To show that the user can encounter random questions per try, I have only coded the easy questions.
var mediumQuestions = new Array()

var diffQuestions = new Array()

var expertQuestions = new Array()

var q = ["q1", "q2", "q3", "q4"];
var qchoices = ["q1choices", "q2choices", "q3choices", "q4choices"];
var qchoice = ["q1choice", "q2choice", "q3choice", "q4choice"];

// to select 4 easy questions
for (i = 0; i < q.length; i++) {
	var a = Math.floor(Math.random() * easyQuestions.length); //generates a random number
	if ((document.getElementById(qchoices[i]).innerHTML == "" || document.getElementById(qchoices[i]).innerHTML == null) && (document.getElementById(q[i]).innerHTML == "" || document.getElementById(q[i]).innerHTML == null)) {
		// checks if the first question blank and if not, moves to the next question and writes the question and choices there
		var question = easyQuestions[a];
		document.getElementById(q[i]).innerHTML = question;
		if (easyChoices[a].length > 4) { // for simplicity's sake, only radio boxes will have 4 choices. thus, any other array wth more than 4 will be a checkbox.
			for (j = 0; j < easyChoices[a].length; j++) { 
				// will make a new option for every choice in the array
				var checkingbox = document.createElement("input");
				checkingbox.type = "checkbox"; // makes a checkbox input
				checkingbox.id = easyChoices[a][j]; // retreives array information
				checkingbox.value = easyChoices[a][j];
				checkingbox.name = qchoices[i];
		
				var label = document.createElement("label");
				label.htmlFor = qchoice[i];
				
				var description = document.createTextNode(easyChoices[a][j]);
				label.appendChild(description);
		
				var newline = document.createElement('br');
		
				var questionchoices = document.getElementById(qchoices[i]);
				questionchoices.appendChild(checkingbox);
				questionchoices.appendChild(label);
				questionchoices.appendChild(newline);
			}
		} else {
			for (j = 0; j < easyChoices[a].length; j++) {
				var radiobox = document.createElement("input");
				radiobox.type = "radio"; // makes a radio button input
				radiobox.id = easyChoices[a][j];
				radiobox.value = easyChoices[a][j];
				radiobox.name = qchoices[i];
		
				var label = document.createElement("label");
				label.htmlFor = qchoice[i];
		
				var description = document.createTextNode(easyChoices[a][j]);
				label.appendChild(description);
		
				var newline = document.createElement('br');
		
				var questionchoices = document.getElementById(qchoices[i]);
				questionchoices.appendChild(radiobox);
				questionchoices.appendChild(label);
				questionchoices.appendChild(newline);
			}
		}
	}
	easyQuestions.splice(a, 1); // removes already selected questions from the array so there won't be any repititions
	easyChoices.splice(a, 1);
}

function computescore() {
	if (confirm("Are you sure you want to submit?")) {
		// checks if the user's answers are correct
		var choices = ["q1choices", "q2choices", "q3choices", "q4choices"];
		var qanswer = "";
		var score = 0;
	
		// checks all easy question answers
		for (x = 0; x < choices.length; x++) {
			var qchoices = document.getElementsByName(choices[x]);
			var qanswer = "";
			
			// checks the value the user chose
			for (i = 0; i < qchoices.length; i++) {
				if (qchoices[i].checked) {
					qanswer = qanswer + qchoices[i].value;
				}
			}
			
			// runs through all the correct answers and adds points
			switch (qanswer){
				case "March 25, 2018":
					score = score + 3;
					break;
				case "Bang Chan":
					score = score + 3;
					break;
				case "Hellevator":
					score = score + 3;
					break;
				case "8":
					score = score + 3;
					break;
				case "JYP Entertainment":
					score = score + 3;
					break;
				case "I.N":
					score = score + 3;
					break;
				case "HanFelixHyunjinSeungmin":
					score = score + 3;
					break;
				default:
					// since the user's answer wasn't in any of the cases, it must be wrong
					score = score + 0;
			}
		}
		// local storage chu chu
		localStorage.setItem("score", score);
	} else {
		event.preventDefault();
	}
}