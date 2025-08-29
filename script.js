function firstWord(s) {
  // your code here
	let str = s.trim();
	let firstWord = str.split(' ');
	return firstWord[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
