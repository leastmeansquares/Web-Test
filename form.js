const submitBtn = document.getElementById("submit");
const display =  document.getElementById("display");


submitBtn.addEventListener("click", ()=> {    
    const fName = document.getElementById("fname").value;
    display.value = fName;
})

