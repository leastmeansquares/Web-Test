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

serviceBtn1.addEventListener("click", ()=>{serviceBtnClick(1)});
serviceBtn2.addEventListener("click", ()=>{serviceBtnClick(2)});
serviceBtn3.addEventListener("click", ()=>{serviceBtnClick(3)});
serviceBtn4.addEventListener("click", ()=>{serviceBtnClick(4)});
serviceBtn5.addEventListener("click", ()=>{serviceBtnClick(5)});
serviceBtn6.addEventListener("click", ()=>{serviceBtnClick(6)});