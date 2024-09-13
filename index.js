
// INDEX PAGE

const indexPage = () => {

    const mainForm = document.getElementById("main-form");
    const outerForm = document.getElementById("form-section-outer");

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

    document.body.querySelectorAll(".form-btn").forEach((btn) => 
        btn.addEventListener("click", contactUsClick)
    )



    const pageBtn1 = document.getElementById("page-btn-1");
    const pageBtn2 = document.getElementById("page-btn-2");
    const pageBtn3 = document.getElementById("page-btn-3");

    const imagePicker = document.getElementById("image-picker");

    const default1 = pageBtn1.innerHTML;
    const default2 = pageBtn2.innerHTML;
    const default3 = pageBtn3.innerHTML;

    const pageBtnClick = (btn) => {

        if (btn === pageBtn1){
            pageBtn1.innerHTML = default1 + `<div>
                                                Pro Property Care management is a more efficient way to manage properties
                                                - with additional benefits for both landlords and tenants.
                                                We combine a hands-on approach to properties within our local area with online management that speeds up the whole letting process .
                                                <br>
                                                <a href="lettings.html">Read More...</a>
                                            </div>`;
            pageBtn2.innerHTML = default2;
            pageBtn3.innerHTML = default3;
            imagePicker.src = `images\\Backgrounds\\pexels-curtis-adams-1694007-3935316.jpg`;
            pageBtn1.classList.add("pressed");
            pageBtn2.classList.remove("pressed");
            pageBtn3.classList.remove("pressed");
        }   

        else if (btn === pageBtn2){
            pageBtn1.innerHTML = default1;
            pageBtn2.innerHTML = default2 + `<div>
                                                We offer a quick, simple, but dynamic approach to letting properties.
                                                <br><br>
                                                Add more text here.
                                                <br>
                                                <a href="index.html">Read More...</a>
                                                <button class="alt-button">SEE OUR PROPERTY LISTINGS</button>
                                            </div>
`;
            pageBtn3.innerHTML = default3;
            imagePicker.src = `images\\Backgrounds\\pexels-spencphoto-28111458.jpg`;
            pageBtn2.classList.add("pressed");
            pageBtn1.classList.remove("pressed");
            pageBtn3.classList.remove("pressed");
        } 

        if (btn === pageBtn3){
            pageBtn1.innerHTML = default1;
            pageBtn2.innerHTML = default2;
            pageBtn3.innerHTML = default3 + `<div>
                                                As well as providing some additional maintenance services for property management, we
                                                also operate other types of maintenance including Landscaping &amp; Fencing.
                                                <br>
                                                <a href="maintenance.html">Read More...</a>
                                            </div>`;
            imagePicker.src = `images\\Backgrounds\\pexels-life-of-pix-8092.jpg`;
            pageBtn3.classList.add("pressed");
            pageBtn1.classList.remove("pressed");
            pageBtn2.classList.remove("pressed");
        }
    }

    document.body.querySelectorAll(".page-btn").forEach((btn) => 
        btn.addEventListener("click", ()=>pageBtnClick(btn))
    )

    pageBtnClick(pageBtn1);


    

    let testimonials = document.getElementById("testimonial-container") || document.body.querySelectorAll(".testimonial-box");
    testimonials.left = testimonials.getBoundingClientRect().left;
    let lastBox = document.getElementById("last-box");
    let maxScroll = testimonials.scrollWidth - testimonials.clientWidth;

    const horizontalScroll = (event) => {

        testimonials = document.getElementById("testimonial-container") || document.body.querySelectorAll(".testimonial-box");
        testimonials.left = testimonials.getBoundingClientRect().left;
        lastBox = document.getElementById("last-box");
        maxScroll = testimonials.scrollWidth - testimonials.clientWidth;

        event.preventDefault();

        

        if (!event.deltaY) {
            return;
          }
          
        event.currentTarget.scrollLeft += 0.5 * (event.deltaY + event.deltaX);


        const endPoint = lastBox.getBoundingClientRect().right;

        if (testimonials.left >= endPoint - 1000 && event.deltaY + event.deltaX > 0){
            event.currentTarget.scrollLeft = 0;
            event.currentTarget.scrollLeft += 0.5 * (event.deltaY + event.deltaX);
        }
        else if (event.currentTarget.scrollLeft <= 1000 && event.deltaY + event.deltaX < 0){
            event.currentTarget.scrollLeft = maxScroll;
            while (event.currentTarget.scrollLeft > endPoint){
                event.currentTarget.scrollLeft += 0.5 * (event.deltaY + event.deltaX);
            }
            event.currentTarget.scrollLeft += 0.5 * (event.deltaY + event.deltaX);
        }

      }

     


    testimonials.addEventListener("wheel", horizontalScroll);

    

}


// LETTINGS PAGE


const lettingsPage = () => {

    const textDisplay = document.getElementById("text-display");

    const textObj = {
        lettingsBtn1: "For the landlords who simply want the agent to find a good quality tenant, complete the necessary checks and make the transition as smooth as possible for them to manage the property themselves.",
        lettingsBtn2: "Similar to the Let-Only service above but this includes an Inventory &amp; Property Condition Report which goes hand-in-hand with registering the security deposit. Once the tenancy commences, we then continue to collect the rent and provide monthly statements and support for the landlord. Generally, this is for landlords who prefer to be involved directly with the day-to-day running of the property but who have a back-up with the agent for the financial and legal aspects of the tenancy. You can upgrade at any time to Full-Management.",
        lettingsBtn3: "This is the most popular choice for landlords, managing the tenants, maintenance/safety checks, rent collection and dealing with any issues. The agent takes over the full running of the property and keeps the landlord updated on an ongoing basis. A landlord would only normally go to the property in between tenancies for their own peace of mind.",
        lettingsBtn4: "In addition to the Full-Management of your property, we also include the MV-Plan service (as below) which aims to reduce the number of call-out charges for non- specialist, small maintenance jobs which the agent may be able to undertake ie. tightening screws, battery replacement, small repairs (although material costs may still apply).",
        lettingsBtn5: "The maintenance Visit Plan (MV-Plan) is best described as “A Letting Agent with basic maintenance/handyman included”. The MV-Plan can be selected as a stand-alone service or taken as an upgrade to a Management Plan for a small increase on monthly commission. This type of plan would benefit a landlord who doesn’t have time to spend at the property for maintenance/handyman visits and checks but with the added advantage of the feedback of the letting agent. See separate document for more information."
    }

    const lettingsBtnClick = (btn) => {

        textDisplay.innerHTML = `${textObj[btn.id]}`;
        lettingsBtn1.classList.remove("pressed");
        lettingsBtn2.classList.remove("pressed");
        lettingsBtn3.classList.remove("pressed");
        lettingsBtn4.classList.remove("pressed");
        lettingsBtn5.classList.remove("pressed");
        btn.classList.add("pressed");
    }

    document.body.querySelectorAll(".lettings-btn").forEach((btn) => 
        btn.addEventListener("click", ()=>lettingsBtnClick(btn))
        
    )

    lettingsBtnClick(document.getElementById("lettingsBtn1"));

    const lettingBoxes = {
        dropdownBtn1: dropdownBox1,
        dropdownBtn2: dropdownBox2,
        dropdownBtn3: dropdownBox3,
        dropdownBtn4: dropdownBox4,
    }

   dropDownBtnAdd(lettingBoxes);
}


// MAINTENANCE PAGE


const maintenancePage = () => {

    const maintenanceBoxes = {
        dropdownBtn1: dropdownBox1,
        dropdownBtn2: dropdownBox2,
        dropdownBtn3: dropdownBox3,
        dropdownBtn4: dropdownBox4,
        dropdownBtn5: dropdownBox5,
        dropdownBtn6: dropdownBox6,
        dropdownBtn7: dropdownBox7,
        dropdownBtn8: dropdownBox8,
        dropdownBtn9: dropdownBox9,
        dropdownBtn10: dropdownBox10,
        dropdownBtn11: dropdownBox11
    }

    const workBtn = document.getElementById("our-work");
    const workImage = document.getElementById("work-image");

    workImage.textsrc = workImage.src;


    const imageSRCs = [
        "images\\Maintenance\\305628803_496311505834695_124968227498160094_n.jpg",
        "images\\Maintenance\\20200808_205124.jpg",
        "images\\Maintenance\\20210512_172327.jpg",
        "images\\Maintenance\\20210608_162955.jpg",
        "images\\Maintenance\\20220722_134337.jpg",
        "images\\Maintenance\\20220722_135623.jpg",
        "images\\Maintenance\\20230209_133627.jpg",
        "images\\Maintenance\\20240205_124911.jpg",
        "images\\Maintenance\\20240308_230154.jpg",
        "images\\Maintenance\\20240503_144151.jpg",
        "images\\Maintenance\\20240912_160815.jpg",
        "images\\Maintenance\\20240912_162945.jpg",
        "images\\Maintenance\\IMG-20230409-WA0003.jpg",
        "images\\Maintenance\\IMG-20230409-WA0004.jpg",
        "images\\Maintenance\\IMG-20230409-WA0005.jpg",
        "images\\Maintenance\\IMG-20230409-WA0006.jpg",
    ]


    const cycleImage = () => {

        let oldSRC = "";
        
        for (src of imageSRCs){
            
            if (oldSRC == workImage.textsrc){
                workImage.textsrc = src;
                workImage.src = src;
                return;
            }
            else {
                oldSRC = src;
            }
        }
        workImage.src = imageSRCs[0];
        workImage.textsrc = imageSRCs[0];
    }


    workBtn.addEventListener("click", cycleImage);

    cycleImage();

    dropDownBtnAdd(maintenanceBoxes);

    let testimonials = document.getElementById("testimonial-container") || document.body.querySelectorAll(".testimonial-box");
    testimonials.top = testimonials.getBoundingClientRect().top;
    let lastBox = document.getElementById("last-box");
    let maxScroll = testimonials.scrollHeight - testimonials.clientHeight;


    const verticalScroll = (event) => {

        testimonials = document.getElementById("testimonial-container") || document.body.querySelectorAll(".testimonial-box");
        testimonials.top = testimonials.getBoundingClientRect().top;
        lastBox = document.getElementById("last-box");
        maxScroll = testimonials.scrollHeight - testimonials.clientHeight;

        event.preventDefault();

        if (!event.deltaY) {
            return;
          }


        event.currentTarget.scrollTop += 0.5 * event.deltaY;

        const endPoint = lastBox.getBoundingClientRect().top;

        if (testimonials.top >= endPoint && event.deltaY + event.deltaX > 0){
            event.currentTarget.scrollTop = 0;
            event.currentTarget.scrollTop += 0.5 * (event.deltaY + event.deltaX);
        }

        else if (event.currentTarget.scrollTop <= 0 && event.deltaY + event.deltaX < 0){
            event.currentTarget.scrollTop = maxScroll;
            while (event.currentTarget.scrollTop > endPoint){
                event.currentTarget.scrollTop += 0.5 * (event.deltaY + event.deltaX);
            }
            event.currentTarget.scrollTop += 0.5 * (event.deltaY + event.deltaX);
        }

      }

     
    testimonials.addEventListener("wheel", verticalScroll);
}



// UNIVERSAL FEATURES

const headerClick = () => {

    if (headerDisplay.style.display){
        headerDisplay.style.display = "";
    }
    else {
        headerDisplay.style.display = "block";
    }
}


const headerDisplay = document.getElementById("header-display");
document.getElementById("header-btn").addEventListener("click", headerClick);



const dropDownBtnAdd = (boxes) => {

    

    const dropdownBtnClick = (btn) => {
        
        boxes[btn.id].classList.toggle("pressed");
        btn.lastChild.classList.toggle("down");
    }
    
    document.body.querySelectorAll(".dropdown-btn").forEach((btn) => 
        btn.addEventListener("click", ()=> dropdownBtnClick(btn))      
    )

}


const discoveryBtn = document.getElementById("discovery-btn");
const discoveryDropdown = document.getElementById("discovery-dropdown");
const discoveryBoxes = {
    discoveryBtn: discoveryDropdown
}

dropDownBtnAdd(discoveryBoxes);


if (location.pathname === "/lettings.html" || location.pathname === "https://leastmeansquares.github.io/lettings.html"){
    lettingsPage();
}
else if (location.pathname === "/maintenance.html" || location.pathname === "https://leastmeansquares.github.io/maintenance.html"){
    maintenancePage();
}
else if (location.pathname === "/tenants.html" || location.pathname === "https://leastmeansquares.github.io/tenants.html"){
    ;
}
else {
    try {indexPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
