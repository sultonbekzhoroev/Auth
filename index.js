window.addEventListener("load", function () {
  let id = localStorage.getItem("id");
  if (!id) {
    console.log("yok");
    localStorage.setItem("id", 0);
  } else {
    id = Number(id);
  }
  const form = document.querySelector("#form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  document.getElementById("btn-login").addEventListener("click", login);

  function login(e) {
    e.preventDefault();
    let button = this;
    let data = {
      email: emailInput.value,
      password: passwordInput.value,
      admin: "Sultan",
    };
    if (validation(data)) {
      let check;
      for (let i = 0; i < id; i++) {
        const element = localStorage.getItem(`email${i}`);
        if (element == data.email) {
          check = true;
          console.log("var");
        }
      }
      if (!check) {
        console.log("yok", data.email);
        localSet();
      }
    } else {
      alert("email or password not valid!");
    }

    // alert("user already exist");
  }

  function localSet() {
    localStorage.setItem("id", id++);
    localStorage.setItem(`email${id}`, emailInput.value);
    localStorage.setItem(`password${id}`, passwordInput.value);
  }

  function validation(data) {
    //mail
    const mailformat =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailformat.test(data.email);
    //password
  }
});
