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
    let controlId = item.id;
    let showId = controlId.replace('cntrl', 'show');
    document.getElementById(showId).classList.toggle(sfextDisplayOpen);
    item.classList.toggle(sfextDisplayOpen);
  })
});

// if there is one open and a click on any other element besides itself it needs to close
// create an open state
// on keydown event or even tap event
