import { eEqualsMCsquared } from "./site.js";

const mainNode = document.querySelector("main");

const example1 = {
	mass: 1,
}

const exampleParagraph = `Imagine a spaceship that has a mass of ${example1.mass} kg. If we multiply that mass by the speed of light squared(E = MC^2), we get ${eEqualsMCsquared.calculateEnergy(example1.mass)} joules of energy! That’s a lot of energy!`;

mountInformation(exampleParagraph, mainNode);



/**
 * @function mountInformation
 * @param {string} information - The words to put inside the HTML.
 * @param {HTMLElement} parent - The HTML element to put the information block inside.
 */
function mountInformation(information, parent = document.body) {
  const section = document.createElement("section");
  const paragraph = document.createElement("p");
  section.appendChild(paragraph);
  paragraph.textContent = information;

  parent.appendChild(section);
}
