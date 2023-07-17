let inputTag = document.getElementsByTagName("input")[0];
// as there can be multiple tag it choose first tag
let todo = document.getElementsByClassName("list")[0];
// multiple element can share class name, will grab first element from that list

function addnewtodo() {
  if (inputTag.value.length < 1) {
    return;
  }
  let newTag = document.createElement("p");
  newTag.textContent = inputTag.value;
  todo.appendChild(newTag);
}