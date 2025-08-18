// css imports
import "normalize.css";
import "../css/main.css";
import "../css/sidebar-components.css";
// svg import
import addIcon from '../icons/AddCircle.svg';

// select the button (by class)
const addBtn = document.getElementById("add-todo-btn");

// create span wrapper for the SVG
const iconWrapper = document.createElement('span');
iconWrapper.classList.add('btn-icon');
iconWrapper.innerHTML = addIcon;

// insert the SVG at the start of the button
addBtn.prepend(iconWrapper);