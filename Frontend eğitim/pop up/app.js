// const parca = document.querySelectorAll(".section");
// const parcaBtns = document.querySelectorAll(".conrolls");
// const parcaBtn= document.querySelectorAll(".control");
// const allSections = document.querySelector(".main-content");

// function SayfaGecisleri() {
//   //button click active class = butona basınca ne olmasını istiyorum.
//   for (let i = 0; i < parcaBtn.length; i++) {
//     parcaBtn[i].addEventListener("click", function () {
//       let currentBtn = document.querySelectorAll(".active-btn");
//       currentBtn[0].className = currentBtn[0].className.replace(
//         "active-btn",  "" );
//       this.className += " active-btn";
//     });
//   }
//   // tüm aktiv class
//   allSections.addEventListener("click", (e)=> {
//         const id = e.target.dataset.id;  
//         if(id){
//             // ilk önce diğer bölüm butonundan kaldır.
//         parcaBtns.forEach((btn) => {
//           btn.classList.remove("active")            
//         })       
//         e.target.classList.add("active")
        
//         parca.forEach((section) => {
//           section.classList.remove("active")
//         })
//         const element = document.getElementById(id);
//         element.classList.add("active");
//         }
//   })
            
//   } 

// SayfaGecisleri();
var modal = document.getElementById('myModal');
// Kipi açan düğmeyi al
var btn = document.getElementById("myBtn");
// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];
// Kullanıcı düğmeyi tıklattığında
btn.onclick = function() {
    modal.style.display = "block";
}
// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none";
}
// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}