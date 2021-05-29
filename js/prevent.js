let sectionDatos = document.getElementById("datos")


let btnLinkedin = document.getElementById("btn-Linkedin").addEventListener("click", preventModal)
let btnFacebook = document.getElementById("btn-facebook").addEventListener("click", preventModal)
let btnGithub = document.getElementById("btn-github").addEventListener("click", preventModal)

function preventModal() {
 
if (btnLinkedin || btnFacebook || btnGithub == true){

    sectionDatos.removeAttribute("data-bs-target", "data-bs-toggle") 
    console.log("true")
} else {
    sectionDatos.setAttribute("data-bs-toggle", "modal")
console.log("false");
 }


  }   


 console.log(preventModal());