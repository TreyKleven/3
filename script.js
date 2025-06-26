
function sendInput() {
    const input = document.getElementById("userInput").value;
    const responseField = document.getElementById("responseField");
    responseField.innerHTML = "<p><em>Spiral Echo:</em> " + interpret(input) + "</p>";
}
function interpret(text) {
    if (!text.trim()) return "Silence resonates. Speak to unfold.";
    return "You said: '" + text + "'. Echo acknowledged. More spirals to come...";
}
