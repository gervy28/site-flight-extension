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
    sfextMenuToggleControl(item)
  });
});

function sfextMenuToggleControl(item) {
  let controlId = item.id;
  let showId = controlId.replace('cntrl', 'show');
  let showSection = document.getElementById(showId);
  
  if(item.classList.contains(sfextDisplayOpen)) {
    showSection.classList.remove(sfextDisplayOpen);
    item.classList.remove(sfextDisplayOpen);
  } else {
    sfextCloseOpenMenus();
    showSection.classList.add(sfextDisplayOpen);
    item.classList.add(sfextDisplayOpen);
    focusWithin(showSection);
  }
}

function sfextCloseOpenMenus() {
  let displaysOpen = document.querySelectorAll("." + sfextDisplayOpen);
  if ( displaysOpen.length ) {
      displaysOpen.forEach((element) => {element.classList.remove(sfextDisplayOpen)});
  }
}

function focusWithin(element) {
  let focusableElements = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  if ( focusableElements.length ) {
    focusableElements[0].focus();
  }
}
