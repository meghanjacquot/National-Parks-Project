function changePark() {
  let name = prompt("What is your name?");
  let park = prompt("What is your favorite National Park?");
  let heading = document.querySelector("h1");

 if (name.length > 0) {
      heading.innerHTML = "Welcome " + name + " ! " + " Wow, " + park + ", that's a beautiful place! " ; 
} else {
      alert("Please add your name");
  }


}

let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changePark);



let h1 = document.querySelector("h1");

