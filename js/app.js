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
    console.log(li)
});


document.querySelector('ul').appendChild(li)

