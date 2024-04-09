function findElementByClass(rootElement, className) {
  for (let i = 0; i < rootElement.children.length; i++) {
    if (rootElement.children[i].classList.contains(className)) {
      return rootElement.children[i];
    } else {
      findElementByClass(rootElement.children[i]);
    }
  }
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class__info");
console.log(targetElement);
