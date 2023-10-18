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

mountInformation("Is Einstein born in Germany? It is " + eEqualsMCsquared.einsteinBornInGermany.isTrue + " that he is born in Germany" );


function mountInformation(information) {
  
  const sectionTag = document.createElement("section");
  const paragraphTag = document.createElement("p");

  sectionTag.appendChild(paragraphTag);
  paragraphTag.textContent = information;
  mainTag.appendChild(sectionTag);
}
