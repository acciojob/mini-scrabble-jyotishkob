//your code here
let evaluatedText = document.getElementById("evaluatedText")
evaluatedText.addEventListener("input", () => {
	let count = (evaluatedText.value).length;
	document.getElementById("letterCount").textContent = `Total characters: ${count}`;
})