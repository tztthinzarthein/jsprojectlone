// UI
const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

// Event Listener NAV
togglebtn.addEventListener('click',()=>{
   // console.log("hay");
    document.body.classList.toggle('shownav');
});

// Event Listener Open modal
openbtn.addEventListener('click',()=>{
   // modal.style.display = "block";
    modal.classList.add('showmodal');
});

// Event Listener Close modal
closebtn.addEventListener('click',()=>{
   // modal.style.display = "none";
    modal.classList.remove('showmodal');
});

// hide modal on outside click
// window.addEventListener('click',(e)=>{
//     if(e.target === modal){
//         modal.classList.remove('showmodal');
//     }
// });

window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') : false);