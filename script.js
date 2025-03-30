const btnGender = document.querySelectorAll(".gender-btn");

btnGender.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector(".bg-red-300")?.classList.remove("bg-red-300");
        btn.classList.add("bg-red-300");
    })
})

