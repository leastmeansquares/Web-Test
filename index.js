
const serviceBtnHTML = (idNumber) => {
    
    if (idNumber === 0){
        return(`<section class="container outer-form">
            <form class="darkest-blue">
                <h4>CONTACT US</h4>
                <label for="name">NAME</label><br>
                <input type="text" id="name" name="name" required><br>
                <label for="phone-number">PHONE NUMBER</label><br>
                <input type="tel" id="phone-number" name="phone-number" required><br>
                <label for="email">EMAIL ADDRESS</label><br>
                <input type="email" id="email" name="email" required><br>
                <label for="address">FIRST LINE OF ADDRESS</label><br>
                <input type="address" id="address" name="address" required><br>
                <label for="postcode">POSTCODE</label><br>
                <input type="text" pattern="[A-Z0-9]{4}\s?[A-Z0-9]{3}" name="postcode" required/>
                <label for="subject">SUBJECT</label><br>
                <select name="subject" id="subject" required>
                    <option>Please select a subject</option>
                    <option value="subject-a">Subject A</option>
                    <option value="subject-b">Subject B</option>
                    <option value="subject-c">Subject C</option>
                    <option value="subject-d">Subject D</option>
                    <option value="subject-e">Subject E</option>
                    <option value="other">Other (Please Specify)</option>
                </select><br>
                <label for="message">MESSAGE</label><br>
                <textarea id="message" name="message" required></textarea><br>
                <input type="checkbox" id="privacy" name="privacy" class="checkbox" required >
                <label for="privacy">I ACCEPT THE PRIVACY POLICY</label><br>             
                <button type="submit" id="submit-btn">SUBMIT FORM</button>
            </form>
        </section>`);
    }

    else if (idNumber === 1){
        serviceBtn1.classList.add("pressed");

        return(`<section class="text-box align bluish-white">
                    <img src="images\\Backgrounds\\pexels-heyho-6238614.jpg" class="small-image">
                    <div>
                        <h4>Let Only Service</h4>
                        <p>For the landlords who simply want the agent to find a good quality tenant, complete
the necessary checks and make the transition as smooth as possible for them to
manage the property themselves.
Rent Collection &amp; Bond Registration
Similar to the Let-Only service above but this includes an Inventory &amp; Property
Condition Report which goes hand-in-hand with registering the security deposit.
Once the tenancy commences, we then continue to collect the rent and provide
monthly statements and support for the landlord. Generally, this is for landlords who
prefer to be involved directly with the day-to-day running of the property but who
have a back-up with the agent for the financial and legal aspects of the tenancy.
You can upgrade at any time to Full-Management.
Full Management
This is the most popular choice for landlords, managing the tenants,
maintenance/safety checks, rent collection and dealing with any issues. The agent
takes over the full running of the property and keeps the landlord updated on an
ongoing basis.
A landlord would only normally go to the property in between tenancies for their
own peace of mind.
Full Management (PLUS MV-Plan)
In addition to the Full-Management of your property, we also include the MV-Plan
service (as below) which aims to reduce the number of call-out charges for non-
specialist, small maintenance jobs which the agent may be able to undertake ie.
tightening screws, battery replacement, small repairs (although material costs may
still apply).
                        </p>
                        <button class="alt-button white-style white">More Info</button>
                    </div>
                </section>`)
    }
    else if (idNumber === 2){
        serviceBtn2.classList.add("pressed");

        return(`
            <section class="container dark-blue text-box table-box">
                <h4>SERVICE LEVELS AND PRICING</h4>
                <table class="services">
                    <colgroup>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                    </colgroup>
                    <tr>
                        <th></th>
                        <th>Plan 1</th>
                        <th>Plan 2</th>
                        <th>Plan 3</th>
                        <th>Plan 4</th>
                        <th>Plan 5</th>
                    </tr>
                    <tr>
                        <td>Service 1</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                    <tr>
                        <td>Service 2</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                    <tr>
                        <td>Service 3</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                    <tr>
                        <td>Service 4</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                    <tr>
                        <td>Service 5</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                    <tr>
                        <td>Service 6</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                    <tr>
                        <td>Service 7</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                    <tr>
                        <td>Service 8</td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                        <td><p>&#10006</p></td>
                        <td><p>&#10004</p></td>
                    </tr>
                </table>

            </section>`)    }

    else if (idNumber === 3){
        serviceBtn3.classList.add("pressed");

        return(`<section class="text-box align faint-blue">
                    <img src="images\\Backgrounds\\pexels-heyho-6238614.jpg" class="small-image">
                    <div>
                        <h4>Properties</h4>
                        <p>onthemarket</p>
                        <button class="alt-button white-style white">More Info</button>
                    </div>
                </section>`)
    }
    else if (idNumber === 4){
        serviceBtn4.classList.add("pressed");

        return(`<section class="text-box align grey">
                    <img src="images\\Backgrounds\\pexels-heyho-6238614.jpg" class="small-image">
                    <div>
                        <h4>Property maintenance</h4>
                        <p>Description.</p>
                        <button class="alt-button white-style white">More Info</button>
                    </div>
                </section>`)
    }
    else if (idNumber === 5){
        serviceBtn5.classList.add("pressed");

        return(`<section class="text-box align grey">
            <img src="images\\Backgrounds\\pexels-heyho-6238614.jpg" class="small-image">
            <div>
                <h4>Fencing &amp;
Landscaping</h4>
                <p>Description.</p>
                <button class="alt-button white-style white">More Info</button>
            </div>
        </section>`)
}
    else if (idNumber === 6){
        serviceBtn6.classList.add("pressed");

        return(`<section class="text-box align grey">
            <img src="images\\Backgrounds\\pexels-heyho-6238614.jpg" class="small-image">
            <div>
                <h4>Additional
Property
Services</h4>
                <p>Description.</p>
                <button class="alt-button white-style white">More Info</button>
            </div>
        </section>`)
}
}

const mainBtnClick = () => {
    if (popups.innerHTML){popups.innerHTML = "";}
    else {popups.innerHTML = serviceBtnHTML(0);}
}

const serviceBtnClick = (btnNumber) => {

    serviceBtn1.classList.remove("pressed");
    serviceBtn2.classList.remove("pressed");
    serviceBtn3.classList.remove("pressed");
    serviceBtn4.classList.remove("pressed");
    serviceBtn5.classList.remove("pressed");
    serviceBtn6.classList.remove("pressed");

    if (btnNumber !== infoBox.last){
        btnHTML = serviceBtnHTML(btnNumber);
        infoBox.innerHTML = btnHTML;
        infoBox.last = btnNumber;
    }
    else {
        infoBox.innerText = "";
        infoBox.last = -1;
    }

}


const contactUsClick = () => {

    if (mainForm.style.display){
        mainForm.style.display = "";
        outerForm.style.display = "";
    }
    else {
        mainForm.style.display = "flex";
        outerForm.style.display = "block";
    }
}

const headerClick = () => {

    if (headerDisplay.style.display){
        headerDisplay.style.display = "";
    }
    else {
        headerDisplay.style.display = "block";
    }
}



mainBtn = document.getElementById("main-btn");
xBtn = document.getElementById("x-btn");
mainForm = document.getElementById("main-form");
outerForm = document.getElementById("form-section-outer");

serviceBtn1 = document.getElementById("service-btn-1");
serviceBtn2 = document.getElementById("service-btn-2");
serviceBtn3 = document.getElementById("service-btn-3");
serviceBtn4 = document.getElementById("service-btn-4");
serviceBtn5 = document.getElementById("service-btn-5");
serviceBtn6 = document.getElementById("service-btn-6");
infoBox = document.getElementById("info-box");
infoBox.last = -1;

headerBtn = document.getElementById("header-btn");
headerDisplay = document.getElementById("header-display");



mainBtn.addEventListener("click", contactUsClick);
xBtn.addEventListener("click", contactUsClick);

headerBtn.addEventListener("click", headerClick);

serviceBtn1.addEventListener("click", ()=>serviceBtnClick(1));
serviceBtn2.addEventListener("click", ()=>serviceBtnClick(2));
serviceBtn3.addEventListener("click", ()=>serviceBtnClick(3));
serviceBtn4.addEventListener("click", ()=>serviceBtnClick(4));
serviceBtn5.addEventListener("click", ()=>serviceBtnClick(5));
serviceBtn6.addEventListener("click", ()=>serviceBtnClick(6));
