 let inputtext = document.querySelector("#text");
 let btn = document.querySelector("#btn");
 let yes = document.querySelector(".yes");
 let no = document.querySelector(".no");



 btn.addEventListener("click", ()=>{

    let OriginalText = inputtext.value.replace(/[\W_]/g, "").toLowerCase();
    let reverseText = OriginalText.split("").reverse().join("");


    if (OriginalText===reverseText){
        yes.classList.add("show");
        no.classList.remove("show")
    }else{
        yes.classList.remove("show");
        no.classList.add("Show")
    }
 })