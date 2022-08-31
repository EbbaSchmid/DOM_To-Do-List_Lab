//create cached element references for each element (input, button & ul)


// CER for input element.........................

const input = document.querySelector("input")

// CER for button element.........................

const button = document.querySelector("submit-button")

// CER for ul element.........................
const ul = document.querySelector("todo-list")


// Step 6...............................

button.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    console.log(li)
});

li.textContent = inp.value 
document.querySelector('ul').appendChild(li)

