const btnhamburger = document.getElementById("btnHamburger");
const overlay = document.getElementById("overlay");

btnhamburger.addEventListener("click", function(){
    btnhamburger.classList.toggle("open");
    overlay.classList.toggle("overlay");

});


    // if(btnhamburger.classList.contains('open')){
    //     btnhamburger.classList.remove("open");
    //     overlay.classList.remove("overlay");
    //     overlay.classList.add("fade-out");

    // }
    // else {
    //     btnhamburger.classList.add("open");
    //     overlay.classList.add("overlay");
    // }


// Original Tried menu

// const hmenu = document.querySelector('#hmenu');

// hmenu.addEventListener('click', function(){

//     if(hmenu.classList.contains('open')){
//         hmenu.classList.remove('open');
//     }
//     else {
//         hmenu.classList.add('open');
//     }
// });