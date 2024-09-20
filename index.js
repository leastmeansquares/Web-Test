
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
    

}


// LETTINGS PAGE


const lettingsPage = () => {

    const servicesTitle = document.getElementById("services-title");
    const textDisplay = document.getElementById("text-display");
    const servicesImage = document.getElementById("services-image");

    const textObj = {
        lettingsBtn1: ["Let Only Service",
                        "For the landlords who simply want the agent to find a good quality tenant, complete the necessary checks and make the transition as smooth as possible for them to manage the property themselves.",
                        "images\\Backgrounds\\pexels-heyho-6585598.jpg",
                        "#d1dffa"],
        lettingsBtn2: ["Rent Collection & Bond Registration",
                        "Similar to the Let-Only service above but this includes an Inventory & Property Condition Report which goes hand-in-hand with registering the security deposit. Once the tenancy commences, we then continue to collect the rent and provide monthly statements and support for the landlord. Generally, this is for landlords who prefer to be involved directly with the day-to-day running of the property but who have a back-up with the agent for the financial and legal aspects of the tenancy. You can upgrade at any time to Full-Management.",
                        "images\\Backgrounds\\pexels-life-of-pix-8092.jpg",
                        "#b3e6e6"],
        lettingsBtn3: ["Full Management",
                        "This is the most popular choice for landlords, managing the tenants, maintenance/safety checks, rent collection and dealing with any issues. The agent takes over the full running of the property and keeps the landlord updated on an ongoing basis. A landlord would only normally go to the property in between tenancies for their own peace of mind.",
                        "images\\Backgrounds\\pexels-heyho-6585598.jpg",
                        "#218e91"],
        lettingsBtn4: ["Full Management PLUS",
                        "In addition to the Full-Management of your property, we also include the MV-Plan service (as below) which aims to reduce the number of call-out charges for non- specialist, small maintenance jobs which the agent may be able to undertake ie. tightening screws, battery replacement, small repairs (although material costs may still apply).",
                        "images\\Backgrounds\\pexels-life-of-pix-8092.jpg",
                        "#7b68ee"],
        lettingsBtn5: ["MV-Plan",
                        "The maintenance Visit Plan (MV-Plan) is best described as “A Letting Agent with basic maintenance/handyman included”. The MV-Plan can be selected as a stand-alone service or taken as an upgrade to a Management Plan for a small increase on monthly commission. This type of plan would benefit a landlord who doesn’t have time to spend at the property for maintenance/handyman visits and checks but with the added advantage of the feedback of the letting agent. See separate document for more information.",
                        "images\\Backgrounds\\pexels-heyho-6585598.jpg",
                        "#ffddcc"],
        lettingsBtn6: ["Maintenance Services",
                        "Empty box",
                        "images\\Backgrounds\\pexels-heyho-6585598.jpg",
                    "#e0e0e0"]
        }



    const lettingsBtnClick = (btn) => {

        servicesTitle.innerText = `${textObj[btn.id][0]}`;
        servicesTitle.style.color = `${textObj[btn.id][3]}`;
        textDisplay.innerText = `${textObj[btn.id][1]}`;
        servicesImage.src = `${textObj[btn.id][2]}`;
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
