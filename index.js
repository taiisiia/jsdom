document.getElementById("divelem").style.color = "red"

element2 = document.getElementById("divsecond")

const text1 = ["text1", "text2", "text3"];
const listElem = document.createElement("ul")
divsecond.appendChild(listElem);
for (let i = 0; i < 3; i++) {
const listPointElem = document.createElement("li");
listElem.appendChild(listPointElem);
listPointElem.innerHTML = text1[i];
listPointElem.className = "point"
listPointElem.style.fontStyle = "italic";
}
element3 = document.getElementsByClassName("point");
console.log(element3)

const spanElem = document.createElement("SPAN")
const textElem = document.createTextNode('Text text text')
spanElem.appendChild(textElem)
document.body.appendChild(spanElem)

spanElem.style.cssText = "background-color:red"

const text = ["text1", "text2", "text3"];
for (let i = 0; i < 3; i++) {
   const divElem = document.createElement("DIV")
   divElem.id = ("Div" + (i+1));
   divElem.innerHTML = text[i];
    document.body.appendChild(divElem);
}

