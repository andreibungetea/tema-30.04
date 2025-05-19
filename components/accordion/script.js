const accordionTitle = document.querySelector(".accordion-title");
const accordonContent = document.querySelector(".accordion-content");
const accordionOpenIcon = document.querySelector(".accordion-open-icon");
const accordionCloseIcon = document.querySelector(".accordion-close-icon");


const handleAccordionOpen = () => {
    //este mai potrivit sa folosim classList.remove/add in loc de 
    // style.display:block, none, flex sau inline pt ca, in felul acesta
    // este mult mai usor de implementat si evitam erori de implementare
    accordonContent.classList.toggle("hide");
    accordionOpenIcon.classList.toggle("hide");
    accordionCloseIcon.classList.toggle("hide");
}


accordionTitle.addEventListener("click", handleAccordionOpen);