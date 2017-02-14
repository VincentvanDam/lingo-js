var pick = Math.floor(Math.random()*words.length-1);
var guessword = words[pick];
console.log(guessword);

var InputElements = document.getElementsByTagName("input");
console.log(InputElements);
for (var i = 0; i < InputElements.length; i++) {
	InputElements[i].maxLength = 1;
}
var CurrentRow = 1;
var guesswordArr = guessword.split("");
document.getElementById('letter_'+CurrentRow+'_0').value = guesswordArr[0];
function check() {
if (CurrentRow <= 5) {	
	for (var i = 0; i <= 4; i++) {
		var input = document.getElementById('letter_'+CurrentRow+'_'+i); // letter_ 2  _ 2
		if (guesswordArr[i] == input.value) {
			input.style.backgroundColor = "red";
			
		}
	}
	CurrentRow++;
	if (CurrentRow <= 5) {	
		document.getElementById('letter_'+CurrentRow+'_0').value = guesswordArr[0];
	}
	}

}

function reset() {
	document.getElementById("table").reset();
}


