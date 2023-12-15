/********* create variables. *********/
/**
 * Useful variables might be: the cost per day, the number of days selected,
 * and elements on the screen that will be clicked or will need to be modified.
 * Do any of these variables need to be initialized when the page is loaded?
 * When do they need to be reset or updated?
 */

/*** Useful variables. */
let costPerDay = 0, daysSelected = 0;
/*** Represents the days of the week. */
let days = [
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday'
];


/********* colour change days of the week. *********/

/**
 * When the day buttons are clicked, we will apply the "clicked" class to that element,
 * and update any other relevant variables.
 * Then, we can recalculate the total cost.
 * Added challenge: don't update the dayCounter if the same day is clicked more than once.
 * Hint: .classList.contains() might be helpful here!
 */

/*** Checks if a day was selected. */
function isClicked(day) {
    if (!day.classList.contains('clicked')) {
        day.classList.add('clicked');
        daysSelected++;
    }
}


/********* calculate *********/

// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

/*** Calculates the cost. */
function calculate() {
    document.getElementById('calculated-cost')
        .innerHTML = String(costPerDay * daysSelected);
}


/********* clear days *********/

// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/*** Clear days. */
function clearDays() {
    days.forEach(d => {
        let dayElement = document.getElementById(d);
        if (dayElement.classList.contains('clicked')) {
            dayElement.classList.remove('clicked');
        }
    });
    daysSelected = 0;
    calculate();
}


/********* change rate *********/

// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


/*** Changes the rate. */
function changeRate(rate) {
    if (rate === 'half') {
        costPerDay = 20;
        document.getElementById('half').classList.add('clicked');
        document.getElementById('full').classList.remove('clicked');
    }
    else {
        costPerDay = 35;
        document.getElementById('full').classList.add('clicked');
        document.getElementById('half').classList.remove('clicked');
    }
    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// Add event listeners to day buttons.
days.forEach(d => {
    document.getElementById(d).addEventListener('click',
        function() {
            isClicked(this);
            calculate();
        });
});

// Add event listener to clear button.
document.getElementById('clear-button').addEventListener('click', clearDays);

// Add event listeners to rate buttons.
document.getElementById('half')
    .addEventListener('click',
        function() {
            changeRate('half');
        });
document.getElementById('full')
    .addEventListener('click',
        function() {
            changeRate('full');
        });
