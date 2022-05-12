/*function uName() {
	// stores username
	return false;
}*/

function nextP() {
	var uName = document.getElementById("userName").value;
	var a = uName.trim(); // removes any spaces before and after input
	
	if (a == "" || a == null) {
		// makes sure the user has inputted something first
		alert("Kindly enter a username first.");
	} else {
		if (confirm("Are you sure about your username: " + a + "?")) {
			window.location.href="htdocs/quiz.html";
			event.preventDefault();
			// code for local storage
		} else {
			event.preventDefault();
		}
	}
}