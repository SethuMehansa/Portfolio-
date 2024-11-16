const colapse=document.getElementById("collapse");
colapse.forEach((colapses)=>{
    colapses.addEventListener("click",()=>{
        colapses.classList.toggle("active")
    })
})
