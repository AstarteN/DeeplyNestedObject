import { eEqualsMCsquared } from "./object.js";

const mainTag = document.querySelector("main");
const example1 = {
  mass: 1,
};

const exampleParagraph = `Imagine a spaceship that has a mass of ${example1.mass} 
kg. If we multiply that mass by the speed of light squared(E = MC^2), we get ${eEqualsMCsquared.calculateEnergy(
  example1.mass
)} joules of energy! That's a lot of energy!!!!!!`;


mountInformation(exampleParagraph);

mountInformation("Is Einstein born in Germany? It is " + eEqualsMCsquared.einsteinBornInGermany.isTrue + " that he is born in Germany");


function mountInformation(information) {

  const sectionTag = document.createElement("section");
  const paragraphTag = document.createElement("p");

  sectionTag.appendChild(paragraphTag);
  paragraphTag.textContent = information;
  mainTag.appendChild(sectionTag);
}


function setupUserInput() {
  // create elements then mount them to the html tree (put it on the screen)

  // the section container
  const sectionTag = document.createElement("section");

  // this is where the user types
  const inputElement = document.createElement('input');


  //this is where the result gets placed
  const pElement = document.createElement('p')


  //add some css
  sectionTag.classList.add('flex', 'flex-center', 'flex-col')


  //this puts them on the screen
  sectionTag.appendChild(inputElement)
  sectionTag.appendChild(pElement)
  mainTag.appendChild(sectionTag);


  let currentMass = 0
  pElement.innerText = currentMass

  /**
 * Updates the @type {HTMLParagraphElement}  with the 
 * new energy based on mass from the input element
 *
 * @param {KeyboardEvent} event - The keyboard event.
 */

  function handleCalculateEnergy(event) {
    const {value} = event.target
    const inputIsEmpty = value === ""
    if (inputIsEmpty) return

    currentMass = Number(value)
    const currentEnergy = eEqualsMCsquared.calculateEnergy(currentMass)
    pElement.innerText = currentEnergy

  }

  //every time someone types, calculate the energy & put it inside the ptag
  inputElement.addEventListener('keyup', handleCalculateEnergy)
}

setupUserInput()