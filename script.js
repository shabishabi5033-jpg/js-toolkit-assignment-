function showGreeting() {
    document.getElementById('output').innerText = "Hello! This is Function 1.";
}

function showDate() {
    document.getElementById('output').innerText = "Today's date is: " + new Date().toLocaleDateString();
}

document.getElementById('btn1').addEventListener('click', showGreeting);
document.getElementById('btn2').addEventListener('click', showDate);
