/*
* Toggle the visibility of non-nested elements with a control and show
* Requires: 
* .sfext-menu-item: used to create an array of sfextToggleDisplayBtns for event to listen on
* .sfext-open: the universal css class used to turn the display on, not unique
* #sfext-cntrl-{identifier} unique control id in dom
* #sfext-show-{identifier} unique show id in dom
* 
*/

const sfextDisplayOpen = "sfext-open"; // apply this class to show
const sfextToggleDisplayBtns = document.querySelectorAll('.sfext-menu-item');

sfextToggleDisplayBtns.forEach(function(item) {
  item.addEventListener("click", () => {
    sfextMenuToggleControl(item);
    // let controlId = item.id;
    // let showId = controlId.replace('cntrl', 'show');
    // // close the open instance
    // document.getElementById(showId).classList.toggle(sfextDisplayOpen);
    // item.classList.toggle(sfextDisplayOpen);
  })
});


function sfextMenuToggleControl(item) {
  let controlId = item.id;
  let showId = controlId.replace('cntrl', 'show');
  // close the open instance
  document.getElementById(showId).classList.tog
}

// http://jsfiddle.net/5mhqrhwk/3/

// if there is one open and a click on any other element besides the active open it must close
// focus must be set to the first focusable element within the menu
// if another menu option is closed we need to close the menu first
// Ideally I'd bring this fully into a Javascript object to be called with sfextMegaMenu.funciton
// Read some more code examples about making this an object

