// Create a DocumentFragment
var fragment = document.createDocumentFragment();

// Add list items to the DocumentFragment
for (var i = 1; i <= 10; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    fragment.appendChild(listItem);
}

// Add the DocumentFragment to the container (minimizing reflows)
var container = document.getElementById("my-container");
setTimeout(() => {
    container.appendChild(fragment);

}, 3000);