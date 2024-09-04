mainBtn = document.getElementById("main-btn");
serviceBtn1 = document.getElementById("service-btn-1");
serviceBtn2 = document.getElementById("service-btn-2");
serviceBtn3 = document.getElementById("service-btn-3");
serviceBtn4 = document.getElementById("service-btn-4");
serviceBtn5 = document.getElementById("service-btn-5");
serviceBtn6 = document.getElementById("service-btn-6");
infoBox = document.getElementById("info-box");
infoBox.last = -1;

const serviceBtnHTML = (idNumber) => {
    if (idNumber){
        return(`<section class="text-box align grey">
                    <img src="images\\Backgrounds\\pexels-heyho-6238614.jpg" class="small-image">
                    <div>
                        <h4>ARE YOU A LANDLORD?</h4>
                        <p>&#x2714; Committed to Pontefract, Castleford and surrounding areas<br>
                            &#x2714; Extra text here<br>
                            &#x2714; Unlimited accompanied viewings<br>
                            &#x2714; No fuss<br>
                        </p>
                        <button class="alt-button white-style white">More Info</button>
                    </div>
                </section>`)
    }
}

const classAdd = (varNum, className) => {

}

const serviceBtnClick = (btnNumber) => {
    btnHTML = serviceBtnHTML(btnNumber);

    if (btnNumber !== infoBox.last){
        infoBox.innerHTML = btnHTML;
        infoBox.last = btnNumber;
        serviceBtn1.classList.add("pressed")
    }
    else {
        infoBox.innerText = "";
        infoBox.last = -1;
        serviceBtn1.classList.remove("pressed")
    }

}

serviceBtn1.addEventListener("click", ()=>{serviceBtnClick(1)});
serviceBtn2.addEventListener("click", ()=>{serviceBtnClick(2)});
serviceBtn3.addEventListener("click", ()=>{serviceBtnClick(3)});
serviceBtn4.addEventListener("click", ()=>{serviceBtnClick(4)});
serviceBtn5.addEventListener("click", ()=>{serviceBtnClick(5)});
serviceBtn6.addEventListener("click", ()=>{serviceBtnClick(6)});