// Detect click inside/outside of element with single event handler
const myElementToCheckIfClicksAreInsideOf = document.querySelector('#my-element')
// Listen for click events on body
document.body.addEventListener('click', function (event) {
    if (myElementToCheckIfClicksAreInsideOf.contains(event.target)) {
        console.log('clicked inside')
    } else {
        console.log('clicked outside')
    }
})
