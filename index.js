


// INDEX PAGE

const indexPage = () => {



const mainBtn = document.getElementById("main-btn");
const xBtn = document.getElementById("x-btn");
const mainForm = document.getElementById("main-form");
const outerForm = document.getElementById("form-section-outer");

const pageBtn1 = document.getElementById("page-button-1");
const pageBtn2 = document.getElementById("page-button-2");
const pageBtn3 = document.getElementById("page-button-3");

const imagePicker = document.getElementById("image-picker");

const default1 = pageBtn1.innerHTML;
const default2 = pageBtn2.innerHTML;
const default3 = pageBtn3.innerHTML;

const mainBtnClick = () => {
    if (popups.innerHTML){popups.innerHTML = "";}
    else {popups.innerHTML = serviceBtnHTML(0);}
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

const pageBtnClick = (referenceNum) => {

    if (referenceNum === 1){
        pageBtn1.innerHTML = default1 + `<div>From initial viewing, to check-in, through the ongoing visits, and any maintenance issues,
                            we'll be there in person to assess and resolve with the best course of action and our real-time updates will ensure
                            that you're always kept in the loop.
                        </div>  `;
        pageBtn2.innerHTML = default2;
        pageBtn3.innerHTML = default3;
        imagePicker.src = `images\\Backgrounds\\pexels-curtis-adams-1694007-3935316.jpg`;
        pageBtn1.classList.add("pressed");
        pageBtn2.classList.remove("pressed");
        pageBtn3.classList.remove("pressed");
    }   

    else if (referenceNum === 2){
        pageBtn1.innerHTML = default1;
        pageBtn2.innerHTML = default2 + `<div>From initial viewing, to check-in, through the ongoing visits, and any maintenance issues,
                            we'll be there in person to assess and resolve with the best course of action and our real-time updates will ensure
                            that you're always kept in the loop.
                        </div>  `;
        pageBtn3.innerHTML = default3;
        imagePicker.src = `images\\Backgrounds\\pexels-spencphoto-28111458.jpg`;
        pageBtn2.classList.add("pressed");
        pageBtn1.classList.remove("pressed");
        pageBtn3.classList.remove("pressed");
    } 

    if (referenceNum === 3){
        pageBtn1.innerHTML = default1;
        pageBtn2.innerHTML = default2;
        pageBtn3.innerHTML = default3 + `<div>From initial viewing, to check-in, through the ongoing visits, and any maintenance issues,
                            we'll be there in person to assess and resolve with the best course of action and our real-time updates will ensure
                            that you're always kept in the loop.
                        </div>  `;
        imagePicker.src = `images\\Backgrounds\\pexels-life-of-pix-8092.jpg`;
        pageBtn3.classList.add("pressed");
        pageBtn1.classList.remove("pressed");
        pageBtn2.classList.remove("pressed");
    }

}


mainBtn.addEventListener("click", contactUsClick);
xBtn.addEventListener("click", contactUsClick);

pageBtn1.addEventListener("click", ()=>pageBtnClick(1));
pageBtn2.addEventListener("click", ()=>pageBtnClick(2));
pageBtn3.addEventListener("click", ()=>pageBtnClick(3));

pageBtnClick(1);

}


// LETTINGS PAGE


const lettingsPage = () => {

const lettingsBtn1 = document.getElementById("lettings-button-1");
const lettingsBtn2 = document.getElementById("lettings-button-2");
const lettingsBtn3 = document.getElementById("lettings-button-3");
const lettingsBtn4 = document.getElementById("lettings-button-4");
const lettingsBtn5 = document.getElementById("lettings-button-5");

const textDisplay = document.getElementById("text-display");

const textList = [
    "For the landlords who simply want the agent to find a good quality tenant, complete the necessary checks and make the transition as smooth as possible for them to manage the property themselves.",
    "Similar to the Let-Only service above but this includes an Inventory &amp; Property Condition Report which goes hand-in-hand with registering the security deposit. Once the tenancy commences, we then continue to collect the rent and provide monthly statements and support for the landlord. Generally, this is for landlords who prefer to be involved directly with the day-to-day running of the property but who have a back-up with the agent for the financial and legal aspects of the tenancy. You can upgrade at any time to Full-Management.",
    "This is the most popular choice for landlords, managing the tenants, maintenance/safety checks, rent collection and dealing with any issues. The agent takes over the full running of the property and keeps the landlord updated on an ongoing basis. A landlord would only normally go to the property in between tenancies for their own peace of mind.",
    "In addition to the Full-Management of your property, we also include the MV-Plan service (as below) which aims to reduce the number of call-out charges for non- specialist, small maintenance jobs which the agent may be able to undertake ie. tightening screws, battery replacement, small repairs (although material costs may still apply).",
    "The maintenance Visit Plan (MV-Plan) is best described as “A Letting Agent with basic maintenance/handyman included”. The MV-Plan can be selected as a stand-alone service or taken as an upgrade to a Management Plan for a small increase on monthly commission. This type of plan would benefit a landlord who doesn’t have time to spend at the property for maintenance/handyman visits and checks but with the added advantage of the feedback of the letting agent. See separate document for more information."
]

const lettingsBtnClick = (referenceBtn, referenceNum) => {

    textDisplay.innerHTML = `${textList[referenceNum-1]}`;
    lettingsBtn1.classList.remove("pressed");
    lettingsBtn2.classList.remove("pressed");
    lettingsBtn3.classList.remove("pressed");
    lettingsBtn4.classList.remove("pressed");
    lettingsBtn5.classList.remove("pressed");
    referenceBtn.classList.add("pressed");

}

lettingsBtn1.addEventListener("click", ()=>lettingsBtnClick(lettingsBtn1,1));
lettingsBtn2.addEventListener("click", ()=>lettingsBtnClick(lettingsBtn2,2));
lettingsBtn3.addEventListener("click", ()=>lettingsBtnClick(lettingsBtn3,3));
lettingsBtn4.addEventListener("click", ()=>lettingsBtnClick(lettingsBtn4,4));
lettingsBtn5.addEventListener("click", ()=>lettingsBtnClick(lettingsBtn5,5));
lettingsBtnClick(lettingsBtn1,1);
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

const headerBtn = document.getElementById("header-btn");
const headerDisplay = document.getElementById("header-display");

headerBtn.addEventListener("click", headerClick);




if (location.pathname === "/index.html" || location.pathname === "https://leastmeansquares.github.io/" || location.pathname === "https://leastmeansquares.github.io/index.html)"){
    indexPage();
    }

else if (location.pathname === "/lettings.html" || location.pathname === "https://leastmeansquares.github.io/lettings.html"){
    lettingsPage();
}
else if (location.pathname === "/maintenance.html" || location.pathname === "https://leastmeansquares.github.io/maintenance.html"){
    lettingsPage();
}
else {
    try {indexPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}