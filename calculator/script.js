// Select the input box where the result is displayed
const input = document.getElementById('inputBox');

// Select all buttons on the page
const buttons = document.querySelectorAll('button');

// Initialize an empty string to build the input expression
let string = "";

// Convert the NodeList of buttons to an array to use array methods
const arr = Array.from(buttons);

// Iterate over each button and attach a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        // Handle '=' button click for evaluating the expression
        if (buttonText === '=') {
            try {
                // Evaluate the expression and update the input box
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Handle any errors in the expression
                input.value = "Error";
                string = "";
            }
        }

        // Handle 'AC' button click for clearing the input
        else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        }

        // Handle 'DEL' button click for deleting the last character
        else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }

        // Handle all other button clicks (digits and operators)
        else {
            string += buttonText;
            input.value = string;
        }
    });
});
