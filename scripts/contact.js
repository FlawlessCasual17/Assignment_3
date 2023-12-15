// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

/*** An array of `<input>` fields. */
const inputFields = [
    document.getElementById('user-name'),
    document.getElementById('user-email')
];

/**
 * Gets the `<textarea>` element with
 * an id of `user-message`.
 */
const textAreaField = document
    .getElementById('user-message');

/**
 * Checks for if `<input>` fields
 * are filled with text.
 */
function isInputFieldFilled() {
    // noinspection LocalVariableNamingConventionJS
    /*** The first condition. */
    const condition1 = inputFields[0].value !== '';

    // noinspection LocalVariableNamingConventionJS
    /*** The second condition. */
    const condition2 = inputFields[1].value !== '';

    // noinspection LocalVariableNamingConventionJS
    /*** The third condition. */
    const condition3 = textAreaField.value !== '';

    if (condition1 && condition2 && condition3) {
        const msg = document
            .getElementById('contact-page');
        msg.innerHTML = '<p>Thank you for your message</p>';
        msg.style.fontSize = '24px';
    }
}

/**
 * A listener event that checks if a `<button>` element with an
 * id of `submit-button` is interacted with by the user.
 */
document.getElementById('submit-button')
    .addEventListener('click',
        function(ev) {
            ev.preventDefault();
            isInputFieldFilled();
        });

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

