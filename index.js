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
    if (idNumber === 1){
        serviceBtn1.classList.add("pressed");

        return(`<section class="text-box align bluish-white">
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
    else if (idNumber === 2){
        serviceBtn2.classList.add("pressed");

        return(`<section class="text-box align dark-blue">
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
    else if (idNumber === 3){
        serviceBtn3.classList.add("pressed");

        return(`<section class="text-box align faint-blue">
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
    else if (idNumber === 4){
        serviceBtn4.classList.add("pressed");

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
    else if (idNumber === 5){
        serviceBtn5.classList.add("pressed");

        return(`<section class="text-box align white">
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
    else if (idNumber === 6){
        serviceBtn6.classList.add("pressed");

        return(`<section class="text-box align orange-white">
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

const serviceBtnClick = (btnNumber) => {

    if (btnNumber !== infoBox.last){
        btnHTML = serviceBtnHTML(btnNumber);
        infoBox.innerHTML = btnHTML;
        infoBox.last = btnNumber;
    }
    else {
        infoBox.innerText = "";
        infoBox.last = -1;
        serviceBtn1.classList.remove("pressed");
        serviceBtn2.classList.remove("pressed");
        serviceBtn3.classList.remove("pressed");
        serviceBtn4.classList.remove("pressed");
        serviceBtn5.classList.remove("pressed");
        serviceBtn6.classList.remove("pressed");
    }

}

serviceBtn1.addEventListener("click", ()=>{serviceBtnClick(1)});
serviceBtn2.addEventListener("click", ()=>{serviceBtnClick(2)});
serviceBtn3.addEventListener("click", ()=>{serviceBtnClick(3)});
serviceBtn4.addEventListener("click", ()=>{serviceBtnClick(4)});
serviceBtn5.addEventListener("click", ()=>{serviceBtnClick(5)});
serviceBtn6.addEventListener("click", ()=>{serviceBtnClick(6)});