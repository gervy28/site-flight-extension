/*
* Toggle the visibility of non-nested elements with a control and show
* Requires: 
* .sfext-menu-item: universal class used to identify a control in the dom
* .sfext-open: universal class to apply an active state
* #sfext-cntrl-{identifier} unique control id in dom
* #sfext-show-{identifier} unique show id in dom
* 
*/

const sfextActive = "sfext-open"; // apply this class to show
const sfextToggleMenu = document.querySelectorAll('.sfext-menu-item');

sfextToggleMenu.forEach(function(item) {
  item.addEventListener("click", () => {
    let controlId = item.id;
    let showId = controlId.replace('cntrl', 'show');
    document.getElementById(showId).classList.toggle(sfextActive);
    item.classList.toggle(sfextActive);
  })
});
