const clickMebtn = document.getElementById("click-me-id");
clickMebtn.addEventListener("click", () => {
  alert("Hey");
});
 
/* CREATE BUTTON */
let heading1 = document.createElement("H1");
heading1.innerHTML = "Home Page";
let root = document.getElementById("root");
root.appendChild(heading1);