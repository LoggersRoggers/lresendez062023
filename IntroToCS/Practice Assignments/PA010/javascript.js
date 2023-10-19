// Add event listener
// Add onclick event to #one

// Create variable for our element

let e1; // Element one
e1=window.document.querySelector('#one');
e1.addEventListener('click', backgroundChange);



function backgroundChange()
{
    // window.alert('hello');
    e1.style.backgroundColor="red";
}