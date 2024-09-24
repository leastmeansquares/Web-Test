
// INDEX PAGE

const indexPage = () => {


    const testimonialShift = (right) => {
        
        testimonialSlide[current].classList.add("hide");
        current = (current + 2 * (1 && right) + 10)  % 11;
        testimonialSlide[current].classList.remove("hide");
    }


    let testimonialSlide = [];
    const leftBtn = document.getElementById("testimonial-left");
    const rightBtn = document.getElementById("testimonial-right");

    for (let i = 0; i < 11; i++){
        testimonialSlide.push(document.getElementById(`testimonial-${i}`));
    }

    let current = 0;

    leftBtn.addEventListener("click", () => testimonialShift(false));
    rightBtn.addEventListener("click", () => testimonialShift(true));

    const mainImage = document.getElementById("hero-img");

    heroSRCS = [
        "images/Backgrounds/P1000065.JPG",
        "images/Backgrounds/Castleford & Pontefract Landmarks/Buttercross.jpg",
        "images/Backgrounds/Home Page with tint.JPG",
        "images/Backgrounds/Castleford & Pontefract Landmarks/CastlefordLandmarks 005.jpg",
        "images/Backgrounds/P1060123.JPG",
        "images/Backgrounds/Castleford & Pontefract Landmarks/CastlefordLandmarks 010.jpg",
        "images/Maintenance/WhatsApp/IMG-20240924-WA0016.jpg",
        "images/Backgrounds/Castleford & Pontefract Landmarks/CastlefordLandmarks 001.jpg",
        "images/Maintenance/305628803_496311505834695_124968227498160094_n.jpg",
        "images/Backgrounds/Castleford & Pontefract Landmarks/CastlefordLandmarks 008.jpg",
    ]

    let srcCounter = 0;
    const srcLen = heroSRCS.length;

    const imageTransition = () => {
        if (srcCounter < srcLen - 1) {
            srcCounter += 1;
            mainImage.src = heroSRCS[srcCounter];
        }
        else {
            mainImage.src = heroSRCS[0];
            srcCounter = 0;
        }
        setTimeout(imageTransition, 2000);
    }
    
    setTimeout(imageTransition, 2000);
}


// LETTINGS PAGE


const lettingsPage = () => {

    const servicesTitle = document.getElementById("services-title");
    const textDisplay = document.getElementById("text-display");
    const servicesImage = document.getElementById("services-image");

    const textObj = {
        lettingsBtn1: ["Let Only Service",
                        "For the landlords who simply want the agent to find a good quality tenant, complete the necessary checks and make the transition as smooth as possible for them to manage the property themselves.",
                        "#d1dffa"],
        lettingsBtn2: ["Rent Collection & Bond Registration",
                        "Similar to the Let-Only service above but this includes an Inventory & Property Condition Report which goes hand-in-hand with registering the security deposit. Once the tenancy commences, we then continue to collect the rent and provide monthly statements and support for the landlord. Generally, this is for landlords who prefer to be involved directly with the day-to-day running of the property but who have a back-up with the agent for the financial and legal aspects of the tenancy. You can upgrade at any time to Full-Management.",
                        "#b3e6e6"],
        lettingsBtn3: ["Full Management",
                        "This is the most popular choice for landlords, managing the tenants, maintenance/safety checks, rent collection and dealing with any issues. The agent takes over the full running of the property and keeps the landlord updated on an ongoing basis. A landlord would only normally go to the property in between tenancies for their own peace of mind.",
                        "#218e91"],
        lettingsBtn4: ["Full Management PLUS",
                        "In addition to the Full-Management of your property, we also include the MV-Plan service (as below) which aims to reduce the number of call-out charges for non- specialist, small maintenance jobs which the agent may be able to undertake ie. tightening screws, battery replacement, small repairs (although material costs may still apply).",
                        "#7b68ee"],
        lettingsBtn5: ["MV-Plan",
                        "The maintenance Visit Plan (MV-Plan) is best described as “A Letting Agent with basic maintenance/handyman included”. The MV-Plan can be selected as a stand-alone service or taken as an upgrade to a Management Plan for a small increase on monthly commission. This type of plan would benefit a landlord who doesn’t have time to spend at the property for maintenance/handyman visits and checks but with the added advantage of the feedback of the letting agent.",
                        "#ffddcc"],
        lettingsBtn6: ["Maintenance Services",
                        "Our years of experience in dealing with maintenance and general repairs is paramount to a quality inspection as we can identify or resolve many of the issues on our visits. Additional maintenance services we can organise for landlords include Annual Gas Safety Certificates (CP12), Energy Performance Certificate (EPC - 10 years), Electrical Installation Condition Reports (EICR- 5 Years), Additional Specialist Certificates, or Checks for Compliance. Please see Maintenance Page for more details",
                    "#e0e0e0"]
        }



    const lettingsBtnClick = (btn) => {

        servicesTitle.innerText = `${textObj[btn.id][0]}`;
        textDisplay.innerText = `${textObj[btn.id][1]}`;
        servicesTitle.style.color = `${textObj[btn.id][2]}`;
        lettingsBtn1.classList.remove("pressed");
        lettingsBtn2.classList.remove("pressed");
        lettingsBtn3.classList.remove("pressed");
        lettingsBtn4.classList.remove("pressed");
        lettingsBtn5.classList.remove("pressed");
        lettingsBtn6.classList.remove("pressed");
        btn.classList.add("pressed");
    }

    document.body.querySelectorAll(".lettings-btn").forEach((btn) => 
        btn.addEventListener("click", ()=>lettingsBtnClick(btn))
        
    )

    lettingsBtnClick(document.getElementById("lettingsBtn1"));
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
        "images/Maintenance/305628803_496311505834695_124968227498160094_n.jpg",
        "images/Maintenance/20200808_205124.jpg",
        "images/Maintenance/20210512_172327.jpg",
        "images/Maintenance/20210608_162955.jpg",
        "images/Maintenance/20230209_133627.jpg",
        "images/Maintenance/20240205_124911.jpg",
        "images/Maintenance/20240503_144151.jpg",
        "images/Maintenance/IMG-20230409-WA0004.jpg",
        "images/Maintenance/IMG-20230409-WA0006.jpg",
        "images/Maintenance/20200622_180922.jpg",
        "images/Maintenance/20200918_120712.jpg",
        "images/Maintenance/20200919_183746.jpg",
        "images/Maintenance/20200919_183838.jpg",
        "images/Maintenance/20220801_100053.jpg",
        "images/Maintenance/20220807_143228.jpg",
        "images/Maintenance/20240308_154957.jpg",
        "images/Maintenance/20240308_155050.jpg",
        "images/Maintenance/20240503_144042.jpg",
        "images/Maintenance/20240503_144223.jpg",
        "images/Maintenance/20240531_104127.jpg",
        "images/Maintenance/20240531_104243.jpg"
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
    let firstBox = document.getElementById("first-box");
    let lastBox = document.getElementById("last-box");



    const verticalScroll = (event) => {


        testimonials = document.getElementById("testimonial-container") || document.body.querySelectorAll(".testimonial-box");
        firstBox = document.getElementById("first-box");
        lastBox = document.getElementById("last-box");
        viewBox = testimonials.getBoundingClientRect();

        event.preventDefault();

        if (!event.deltaY) {
            return;
          }

        event.currentTarget.scrollTop += 0.75 * (event.deltaY + event.deltaX);

        firstBox.position = firstBox.getBoundingClientRect();
        lastBox.position = lastBox.getBoundingClientRect();

        
        if (viewBox.top >= lastBox.position.top && event.deltaY > 0){
            event.currentTarget.scrollTop = firstBox.position.top;
        }

        else if (viewBox.top <= firstBox.position.top && event.deltaY < 0){
            event.currentTarget.scrollTop = lastBox.position.top; 
        }

      }


      if (!window.matchMedia("(pointer: coarse)").matches) {
        testimonials.scrollTop += 0.5 * testimonials.scrollWidth;
        testimonials.addEventListener("wheel", verticalScroll);
    }

}

const tenantPage = () => {

    let pageBtn = ["","","","","","",""];
    let buttonBox = ["","","","","","",""];
    const arrangementBoxB = document.getElementById("arrangement-box-b");


    for (let i = 0; i < 7; i++){
        pageBtn[i] = document.getElementById(`page-btn-${i}`);
        buttonBox[i] = document.getElementById(`btn-text-${i}`);
    }

    const pageBtnClick = (btn) => {

        for (i = 0; i < 7; i++){

            if (btn === pageBtn[i]){
                foundButton = i;
            }

            else {
                pageBtn[i].classList.remove("pressed");
                buttonBox[i].classList.add("hide");
            }
        }

        pageBtn[foundButton].classList.add("pressed");
        buttonBox[foundButton].classList.remove("hide");
        arrangementBoxB.scrollTop = 0;
    }

    document.body.querySelectorAll(".page-btn").forEach((btn) => 
        btn.addEventListener("click", ()=>pageBtnClick(btn))
    )

    pageBtnClick(pageBtn[0]);



}



// PERSISTENT FEATURES

const mainForm = document.getElementById("main-form");
mainForm.selection = document.getElementById("pick-subject");
const outerBck = document.getElementById("bck-display-outer");
getStartedBtn = document.getElementById("get-started");
footerSubject = document.getElementById("page-subject");

const contactUsClick = () => {

    if (mainForm.style.display){
        cancelClick();
    }
    else {
        cancelClick();
        mainForm.style.display = "flex";
        outerBck.style.display = "block";
        outerBck.style.opacity = "0.6";
    }
}

document.body.querySelectorAll(".form-btn").forEach((btn) => 
    btn.addEventListener("click", contactUsClick)
)

getStartedBtn.addEventListener("click", () => {
    mainForm.selection.value = footerSubject.value;
    contactUsClick()
}
);


const headerClick = () => {

    if (headerDisplay.style.display){
        document.removeEventListener("scroll", cancelClick);
        cancelClick();
    }
    else {
        document.addEventListener("scroll", cancelClick);
        cancelClick();
        headerDisplay.style.display = "block";
        outerBck.style.display = "block";
        outerBck.style.opacity = "0";
    }
}

const cancelClick = () => {
    mainForm.style.display = "";
    outerBck.style.display = "";
    headerDisplay.style.display = "";
}


const headerDisplay = document.getElementById("header-display");
document.getElementById("header-btn").addEventListener("click", headerClick);
outerBck.addEventListener("click", cancelClick);



const dropDownBtnAdd = (boxes) => {

    

    const dropdownBtnClick = (btn) => {
        
        btn.classList.toggle("pressed");
        boxes[btn.id].classList.toggle("pressed");
        btn.lastChild.classList.toggle("down");

    }
    
    document.body.querySelectorAll(".dropdown-btn").forEach((btn) => 
        btn.addEventListener("click", ()=> dropdownBtnClick(btn))      
    )

}


const footerBtns = document.body.querySelectorAll(".footer-button");
const discoveryDropdown = document.getElementById("discovery-dropdown");
const getInTouchDropdown = document.getElementById("get-in-touch-dropdown");
const footerBoxes = {
    discoveryBtn: discoveryDropdown,
    getInTouchBtn: getInTouchDropdown
}

dropDownBtnAdd(footerBoxes);


if (location.pathname === "/lettings.html" || location.pathname === "https://leastmeansquares.github.io/lettings.html"){
    try {lettingsPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
else if (location.pathname === "/maintenance.html" || location.pathname === "https://leastmeansquares.github.io/maintenance.html"){
    try {maintenancePage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
else if (location.pathname === "/tenants.html" || location.pathname === "https://leastmeansquares.github.io/tenants.html"){
    try {tenantPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
else {
    try {indexPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
