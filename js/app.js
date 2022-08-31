//create cached element references for each element (input, button & ul)


// CER for input element.........................

const input = document.getElementById("input")

// CER for button element.........................

const button = document.getElementById("submit-button")

// CER for ul element.........................
const ul = document.getElementById("todo-list")


// Step 6...............................

button.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    li.textContent = input.value
})

// CER for reset button.........................
const reset = document.getElementById('reset-button')

document.querySelector('ul').addEventListener('click', Click)


reset.addEventListener('click', function(evt) {
    ul.innerHTML = ''
    input.value = ''
})

document.querySelector('ul').addEventListener('click', handleClick)