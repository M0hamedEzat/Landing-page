/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

  //Globall variables
const sections = document.querySelectorAll('section'); // selects all the sections 
const fragment = document.createDocumentFragment();   // Fragment Document to add li to  it for the sake of preformance
const ul = document.querySelector('#navbar__list');  // Selects the ul


 // Build the nav bar

// for each loop to put sections in li and <a> to add to li + styling them.

sections.forEach((element) => {
  const li = document.createElement('li'); // Create <li> element
  const anchor = document.createElement('a'); // Create <a> element

  // ADD <a> to <li>
  li.appendChild(anchor); 

  const text = element.getAttribute('data-nav'); // select each section "data-nav"
  const href = element.getAttribute("id"); // select each section "id"

  anchor.textContent= text ;
  anchor.href = `#${href}`;

  // Add "menu__link" class for <a> element
  anchor.classList.add("menu__link");

  // Add li to fragment for the sake of preformance 
  fragment.appendChild(li); 

  // Scroll into Event
  anchor.addEventListener("click", e => { //scroll on click
      e.preventDefault();
      element.scrollIntoView({behavior: "smooth"})   // scroll more slower
  })
});

ul.appendChild(fragment); // Add li into ul


// Sit Active sections 

window.onscroll = function (){
 sections.forEach(function(active){ // loops for all the sections
  if (
  active.getBoundingClientRect().top >= -400 && 
  active.getBoundingClientRect().top <= 150)
 {                    //Add class
  active.classList.add("your-active-class") // active the class, when the if statment is true
  }else 
 {                 // Remove class
  active.classList.remove("your-active-class") // remove active class, when one of the if statment is false
 }

 }
 );
}