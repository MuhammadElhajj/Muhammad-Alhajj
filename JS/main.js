// ! start scroll button

let UpButton = document.querySelector(".up-button");

window.onscroll = function () {
if (window.scrollY >= 650)
{
    UpButton.style.display = "block";
}
 else if (window.scrollY < 650)
{
    UpButton.style.display = "none";
}
}

UpButton.addEventListener ("click" , () =>{
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    })
})

// ! end scroll button

// ! start mode 

let ModeButton = document.querySelector(".mode");
let moon = document.querySelector(".mode i");

ModeButton.addEventListener("click" , () => {

document.body.classList.toggle("lite-mode");

if (document.body.classList.contains("lite-mode"))
{
    ModeButton.innerHTML = `<i class = "fa-solid fa-sun sun"></i>` ;
}
else {
    ModeButton.innerHTML = `<i class = "fa-solid fa-moon moon"></i>` ;
}
})
// ! end mode 

// ! start show info 

let tablinks = document.querySelectorAll(".tab-link");
let tabinfos = document.querySelectorAll(".tab-info");

function showinfo(tabname){
    console.log(tabname)
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    for ( let i = 0 ; i < tablinks.length ; i++){
        tablinks[i].classList.remove("active-link");
    }
    // for(tabinfo of tabinfos){
    //     tabinfo.classList.remove("active-info");
    // }
    for (let i = 0 ; i < tabinfos.length ; i++ )
    {
        tabinfos[i].classList.remove("active-info");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-info");
}
// ! end show info 