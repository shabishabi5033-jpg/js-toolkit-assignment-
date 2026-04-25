function showGreeting() {
    document.getElementById('output').innerText = "Hello! This is Function 1.";
}

document.getElementById('btn1').addEventListener('click', showGreeting);
