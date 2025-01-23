const display = document.getElementById('display');

window.onload = function() {
    if (localStorage.getItem('display')) {
        display.value = localStorage.getItem('display');
    }
}

function append(value) {
    display.value += value;
    localStorage.setItem('display', display.value);
}

function clearDisplay() {
    display.value = '';
    localStorage.removeItem('display');
}

function calculate() {
    try {
        display.value = eval(display.value);
        localStorage.setItem('display', display.value);
    }
    catch {
        display.value = 'ERROR';
    }
}