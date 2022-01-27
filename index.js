const form = document.querySelector("#form");
const formFilds = form.elements;

const buttonIn = document.querySelector("#sign-in");

buttonIn.addEventListener("click", () => {
  localStorage.clear();
});

for (let i = 0; i < formFilds.length; i++) {
  formFilds[i].addEventListener("change", changeHandler);
}

function changeHandler() {
  localStorage.setItem(this.name, this.value);
}

// function checkStorage() {
//     for (let i = 0; i < formFilds.length; i++){
//         if (formFilds[i].type !== 'submit') {
//             if (formFilds[i].type === 'name') {
//                 formFilds[i].name = localStorage.getItem(formFilds[i].name)
//             }
//         }
//     }
// }
